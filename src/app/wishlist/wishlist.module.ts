import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './wishlist.component';
import { AppRoutingModule } from '../app-routing.module';
import { WishlistSignInModule } from './wishlist-sign-in/wishlist-sign-in.module';
import { WishlistProfileModule } from './wishlist-profile/wishlist-profile.module';
import { WishlistNotFoundModule } from './wishlist-not-found/wishlist-not-found.module';
import { WishlistMainModule } from './wishlist-main/wishlist-main.module';

@NgModule({
  declarations: [WishlistComponent],
  exports: [WishlistComponent],
  imports: [
    CommonModule,
    WishlistSignInModule,
    WishlistProfileModule,
    WishlistNotFoundModule,
    WishlistMainModule,
    AppRoutingModule
  ],
})
export class WishlistModule {}
