import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistLinkComponent } from './wishlist-link.component';
import { TuiSvgModule } from '@taiga-ui/core';
import { WishlistAddFestModule } from '../wishlist-add-fest/wishlist-add-category/wishlist-add-fest.module';

@NgModule({
  declarations: [WishlistLinkComponent],
  exports: [WishlistLinkComponent],
  imports: [CommonModule, TuiSvgModule, WishlistAddFestModule],
})
export class WishlistLinkModule {}
