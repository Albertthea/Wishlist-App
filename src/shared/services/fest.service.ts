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
      const ref = this.db.database.ref('/' + userData.uid);
      ref.get().then((snapshot) => {
        const result = snapshot.val() || [
          { festId: '', festTitle: 'нет такого праздника', gifts: [] },
        ];
        for (const c of result) {
          if (!c.gifts) {
            c.gifts = [];
          }
        }
        this._data = result;
        console.log('Data updated:', this._data);
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

  editGift(updatedGift: WishlistGift): void {
    const festToUpdate = this._data.find((fest) =>
      fest.gifts.some((gift) => gift.giftId === updatedGift.giftId),
    );

    if (festToUpdate) {
      const giftToUpdate = festToUpdate.gifts.find(
        (gift) => gift.giftId === updatedGift.giftId,
      );

      if (giftToUpdate) {
        giftToUpdate.isDone = updatedGift.isDone;
      }
    }
  }
}
