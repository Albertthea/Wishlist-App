import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistGiftComponent } from './wishlist-gift.component';

@NgModule({
  declarations: [WishlistGiftComponent],
  exports: [WishlistGiftComponent],
  imports: [CommonModule],
})
export class WishlistGiftModule {}
