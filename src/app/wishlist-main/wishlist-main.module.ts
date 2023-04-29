import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistMainComponent } from './wishlist-main.component';
import { WishlistHeaderModule } from './wishlist-header/wishlist-header.module';

@NgModule({
  declarations: [WishlistMainComponent],
  exports: [WishlistMainComponent],
  imports: [CommonModule, WishlistHeaderModule],
})
export class WishlistMainModule {}
