import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistGiftComponent } from './wishlist-gift.component';
import { TuiSvgModule } from '@taiga-ui/core';
import { WishlistAddGiftModule } from '../wishlist-add-gift/wishlist-add-gift.module';

@NgModule({
  declarations: [WishlistGiftComponent],
  exports: [WishlistGiftComponent],
  imports: [CommonModule, TuiSvgModule, WishlistAddGiftModule],
})
export class WishlistGiftModule {}
