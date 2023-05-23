import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistMainComponent2 } from './wishlist-main2.component';
import { WishlistHeaderModule } from './wishlist-header/wishlist-header.module';
import { DataService } from 'src/shared/services/gifts.service';
import { WishlistGiftModule2 } from './wishlist-gift2/wishlist-gift2.module';
import { WishlistProfileBarModule2 } from './wishlist-profile-bar/wishlist-profile-bar.module';
import { FormsModule } from '@angular/forms';
import { TuiButtonModule } from '@taiga-ui/core';

@NgModule({
  declarations: [WishlistMainComponent2],
  exports: [WishlistMainComponent2],
  providers: [DataService],
  imports: [
    CommonModule,
    FormsModule,
    WishlistHeaderModule,
    WishlistGiftModule2,
    WishlistProfileBarModule2,
    TuiButtonModule,
  ],
})
export class WishlistMainModule2 {}
