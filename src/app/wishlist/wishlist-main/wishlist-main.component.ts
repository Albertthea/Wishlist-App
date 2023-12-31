import { Component, OnInit } from '@angular/core';
import { WishlistFest } from 'src/shared/modes/WishlistFest';
import { WishlistGift } from 'src/shared/modes/WishlistGift';
import { DataService } from 'src/shared/services/gifts.service';
import { AuthService } from 'src/shared/services/auth.service';

@Component({
  selector: 'app-wishlist-main',
  templateUrl: './wishlist-main.component.html',
  styleUrls: ['./wishlist-main.component.less'],
})
export class WishlistMainComponent implements OnInit {
  userUid: string | undefined;
  constructor(
    public dataService: DataService,
    public authService: AuthService,
  ) {
    this.authService.currentUser.subscribe(user => {
      if (user) {
        this.userUid = user.uid;
      }
    });
  }

  ngOnInit() {
    this.authService.init();
    this.dataService.updateData();
  }

  addFest(fest: WishlistFest): void {
    this.dataService.addFest(fest);
  }

  editFest(fest: WishlistFest): void {
    this.dataService.editFest(fest);
  }

  deleteFest(id: string): void {
    this.dataService.deleteFest(id);
  }

  setCurrentFest(id: string): void {
    this.dataService.changeCurrentFest(id);
  }

  addGift(gift: WishlistGift): void {
    this.dataService.addGift(gift);
  }

  editGift(gift: WishlistGift): void {
    this.dataService.editGift(gift);
  }

  deleteGift(gift: WishlistGift): void {
    this.dataService.deleteGift(gift);
  }
}
