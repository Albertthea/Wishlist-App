import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistMainComponent } from './wishlist-main.component';
import { WishlistHeaderModule } from './wishlist-header/wishlist-header.module';
import { WishlistContentModule } from './wishlist-content/wishlist-content.module';
import { WishlistMenuModule } from './wishlist-menu/wishlist-menu.module';
import { DataService } from 'src/shared/services/gifts.service';

@NgModule({
  declarations: [WishlistMainComponent],
  exports: [WishlistMainComponent],
  providers: [DataService],
  imports: [
    CommonModule,
    WishlistHeaderModule,
    WishlistContentModule,
    WishlistMenuModule,
  ],
})
export class WishlistMainModule {}
