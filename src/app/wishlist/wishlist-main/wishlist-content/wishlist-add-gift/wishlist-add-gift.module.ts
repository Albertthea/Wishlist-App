import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistAddGiftComponent } from './wishlist-add-gift.component';

@NgModule({
  declarations: [WishlistAddGiftComponent],
  exports: [WishlistAddGiftComponent],
  imports: [CommonModule],
})
export class WishlistAddGiftModule {}
