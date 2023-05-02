import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistContentComponent } from './wishlist-content.component';
import { WishlistAddGiftModule } from './wishlist-add-gift/wishlist-add-gift.module';
import { WishlistGiftModule } from './wishlist-gift/wishlist-gift.module';

@NgModule({
  declarations: [WishlistContentComponent],
  exports: [WishlistContentComponent],
  imports: [CommonModule, WishlistAddGiftModule, WishlistGiftModule],
})
export class WishlistContentModule {}
