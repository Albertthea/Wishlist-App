import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './wishlist.component';
import { AppRoutingModule } from '../app-routing.module';
import { WishlistSignInModule } from './wishlist-sign-in/wishlist-sign-in.module';
import { WishlistProfileModule } from './wishlist-profile/wishlist-profile.module';
import { WishlistNotFoundModule } from './wishlist-not-found/wishlist-not-found.module';
import { WishlistMainModule } from './wishlist-main/wishlist-main.module';
import { WishlistMainModule2 } from './wishlist-main 2/wishlist-main2.module';

@NgModule({
  declarations: [WishlistComponent],
  exports: [WishlistComponent],
  imports: [
    CommonModule,
    WishlistMainModule,
    WishlistSignInModule,
    WishlistProfileModule,
    WishlistNotFoundModule,
    AppRoutingModule,
    WishlistMainModule2,
  ],
})
export class WishlistModule {}
