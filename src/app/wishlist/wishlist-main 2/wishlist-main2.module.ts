import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistMainComponent2 } from './wishlist-main2.component';
import { WishlistHeaderModule } from './wishlist-header/wishlist-header.module';
import { DataService } from 'src/shared/services/gifts.service';
import { WishlistGiftModule2 } from './wishlist-gift/wishlist-gift.module';
import { WishlistProfileBarModule2 } from './wishlist-profile-bar/wishlist-profile-bar.module';

@NgModule({
  declarations: [WishlistMainComponent2],
  exports: [WishlistMainComponent2],
  providers: [DataService],
  imports: [
    CommonModule,
    WishlistHeaderModule,
    WishlistGiftModule2,
    WishlistProfileBarModule2,
  ],
})
export class WishlistMainModule2 {}
