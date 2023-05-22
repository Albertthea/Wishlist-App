import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { WishlistFest } from '../modes/WishlistFest';
import { WishlistGift } from '../modes/WishlistGift';
import { TuiDay } from '@taiga-ui/cdk';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private db: AngularFireDatabase) {}

  ref = this.db.database.ref('/');

  private _staticFests: WishlistFest[] = [
    {
      festId: 'today',
      festTitle: 'Сегодня',
      gifts: [],
    },
    {
      festId: 'starred',
      festTitle: 'Избранное',
      gifts: [],
    },
  ];

  private _data: WishlistFest[] = [...this._staticFests];

  private _currentFestId: string = 'today';

  get dataWithoutStatic(): WishlistFest[] {
    return this._data.slice(2);
  }

  get currentFest(): WishlistFest {
    const index = this._data.findIndex(
      (item) => item.festId === this._currentFestId,
    );
    return this._data[index];
  }

  get today(): WishlistFest {
    return this._data[0];
  }

  get starred(): WishlistFest {
    return this._data[1];
  }

  updateData(): void {
    const cachedUserData = localStorage.getItem('user');

    if (cachedUserData) {
      const userData = JSON.parse(cachedUserData);
      this.ref = this.db.database.ref('/' + userData.uid);

      this.ref.get().then((snapshot) => {
        const result = snapshot.val();

        if (result) {
          for (const c of result) {
            if (!c.gifts) {
              c.gifts = [];
            }
          }

          const nyFestExists = result.some((c: { festId: string; }) => c.festId === 'new_year');
          const bdFestExists = result.some((c: { festId: string; }) => c.festId === 'birthday');
  
          if (!nyFestExists) {
            result.push({
              festId: 'new_year',
              festTitle: 'New Year',
              gifts: [],
            });
          }
  
          if (!bdFestExists) {
            result.push({
              festId: 'birthday',
              festTitle: 'Birthday',
              gifts: [],
            });
          }
  
          this._data = result;
        } else {
          this._data = [
            {
              festId: 'new_year',
              festTitle: 'New Year',
              gifts: [],
            },
            {
              festId: 'birthday',
              festTitle: 'Birthday',
              gifts: [],
            }
          ];
        }
  
        this.setStaticFestsGifts();
        this._data = this._staticFests.concat(this._data);
      });
    }
  }

  setData(data: WishlistFest[]): void {
    const filteredData = data.slice(2);
    this.ref.set(filteredData).then(() => {
      this.updateData();
    });
  }

  setStaticFestsGifts(): void {
    this._staticFests = [
      {
        festId: 'today',
        festTitle: 'Сегодня',
        gifts: [],
      },
      {
        festId: 'starred',
        festTitle: 'Избранное',
        gifts: [],
      },
    ];
    const currentDate = TuiDay.currentLocal()
      .toUtcNativeDate()
      .toISOString()
      .split('T')[0];

    for (const c of this._data) {
      for (const t of c.gifts) {
        if (t.giftDeadline === currentDate) {
          this._staticFests[0].gifts.push(t);
        }

        if (t.isStarred) {
          this._staticFests[1].gifts.push(t);
        }
      }
    }
  }

  // updatedData = this._data.slice(0);
  updatedData = {
    festId: 'ny',
    festTitle: 'NY',
    gifts: [],
  };

  addFest(fest: WishlistFest): void {
    const updatedData = this._data.slice(0);

    updatedData.push(fest);

    this.setData(updatedData);
  }

  editFest(fest: WishlistFest): void {
    const updatedData = this._data.slice(0);
    const index = updatedData.findIndex((item) => item.festId === fest.festId);
    updatedData[index] = fest;

    for (const t of updatedData[index].gifts) {
      t.parentFestTitle = fest.festTitle;
    }

    this.setData(updatedData);
  }

  deleteFest(id: string): void {
    if (this._currentFestId === id) {
      this._currentFestId = 'today';
    }

    let updatedData = this._data.slice(0);
    updatedData = updatedData.filter((item) => item.festId !== id);
    this.setData(updatedData);
  }

  changeCurrentFest(id: string): void {
    this._currentFestId = id;
  }

  addGift(gift: WishlistGift): void {
    const updatedData = this._data.slice(0);
    const index = updatedData.findIndex(
      (item) => item.festId === this._currentFestId,
    );

    updatedData[index].gifts.push(gift);
    this.setData(updatedData);
  }

  editGift(gift: WishlistGift): void {
    const updatedData = this._data.slice(0);
    const festIndex = updatedData.findIndex(
      (item) => item.festId === gift.parentFestId,
    );
    const giftIndex = updatedData[festIndex].gifts.findIndex(
      (item) => item.giftId === gift.giftId,
    );

    updatedData[festIndex].gifts[giftIndex] = gift;
    this.setData(updatedData);
  }

  deleteGift(gift: WishlistGift): void {
    const updatedData = this._data.slice(0);
    const festIndex = updatedData.findIndex(
      (item) => item.festId === gift.parentFestId,
    );
    updatedData[festIndex].gifts = updatedData[festIndex].gifts.filter(
      (item) => item.giftId !== gift.giftId,
    );

    this.setData(updatedData);
  }
}
