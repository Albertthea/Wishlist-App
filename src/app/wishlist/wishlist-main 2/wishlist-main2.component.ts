import { Component, OnInit } from '@angular/core';
import { WishlistFest } from 'src/shared/modes/WishlistFest';
import { WishlistGift } from 'src/shared/modes/WishlistGift';
import { DataService } from 'src/shared/services/gifts.service';
import { AuthService } from 'src/shared/services/auth.service';

@Component({
  selector: 'app-wishlist-main',
  templateUrl: './wishlist-main2.component.html',
  styleUrls: ['./wishlist-main2.component.less'],
})
export class WishlistMainComponent2 implements OnInit {
  constructor(
    public dataService: DataService,
    public authService: AuthService,
  ) {}

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
