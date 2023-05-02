import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistMainComponent } from './wishlist-main.component';
import { WishlistHeaderModule } from './wishlist-header/wishlist-header.module';
import { WishlistContentModule } from './wishlist-content/wishlist-content.module';

@NgModule({
  declarations: [WishlistMainComponent],
  exports: [WishlistMainComponent],
  imports: [CommonModule, WishlistHeaderModule, WishlistContentModule],
})
export class WishlistMainModule {}
