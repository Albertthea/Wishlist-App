import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { WishlistFest } from '../modes/WishlistFest';
import { WishlistGift } from '../modes/WishlistGift';
import { of, map } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FestService {
  currentFest$: Observable<WishlistFest> | undefined;

  constructor(private db: AngularFireDatabase) {}
  ref = this.db.database.ref('/');

  private _data: WishlistFest[] = [];
  private _currentFestId: string = 'нет такого праздника';

  get data(): WishlistFest[] {
    return this._data;
  }

  set data(data: WishlistFest[]) {
    this._data = data;
  }

  setCurrentFestId(festId: string): void {
    this._currentFestId = festId;
    console.log(`currentFestId set to ${this._currentFestId}`);
  }

  get currentFest(): WishlistFest {
    const index = this._data.findIndex(
      (item) => item.festId === this._currentFestId,
    );
    return this._data[index];
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
            if (!c.gifts || !Array.isArray(c.gifts)) {
              c.gifts = [];
            }
          }
        }
      });
    }
  }

  getFest(userId: string, festId: string): Observable<WishlistFest> {
    return this.db
      .list<WishlistFest>(`/${userId}`)
      .snapshotChanges()
      .pipe(
        map((changes) => {
          let fest = changes
            .map((c) => ({ ...(c.payload.val() as WishlistFest) }))
            .find((fest) => fest.festId === festId);
          return fest
            ? fest
            : { festId: '', festTitle: 'нет такого праздника', gifts: [] };
        }),
        catchError(() => {
          return of({
            festId: '',
            festTitle: 'нет такого праздника',
            gifts: [],
          });
        }),
      );
  }

  setData(data: WishlistFest[]): void {
    const filteredData = data.slice(2);
    this.ref.set(filteredData).then(() => {
      this.updateData();
    });
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
}
