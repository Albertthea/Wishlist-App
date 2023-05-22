import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistMenuComponent } from './wishlist-menu.component';
import { WishlistLinkModule } from './wishlist-link/wishlist-link.module';
import { WishlistProfileBarModule } from './wishlist-profile-bar/wishlist-profile-bar/wishlist-profile-bar.module';
import { WishlistAddFestModule } from './wishlist-add-fest/wishlist-add-category/wishlist-add-fest.module';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';

@NgModule({
  declarations: [WishlistMenuComponent],
  exports: [WishlistMenuComponent],
  imports: [
    CommonModule,
    WishlistLinkModule,
    WishlistProfileBarModule,
    WishlistAddFestModule,
    TuiButtonModule,
    TuiSvgModule,
  ],
})
export class WishlistMenuModule {}
