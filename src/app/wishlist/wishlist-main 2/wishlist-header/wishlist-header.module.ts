import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistHeaderComponent } from './wishlist-header.component';

@NgModule({
  declarations: [WishlistHeaderComponent],
  exports: [WishlistHeaderComponent],
  imports: [CommonModule],
})
export class WishlistHeaderModule {}
