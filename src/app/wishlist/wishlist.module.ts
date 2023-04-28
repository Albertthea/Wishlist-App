import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './wishlist.component';
// import { AppRoutingModule } from '../app-routing.module';
// import { WishlistSignInModule } from '../wishlist-sign-in/wishlist-sign-in.module';

@NgModule({
  declarations: [WishlistComponent],
  exports: [WishlistComponent],
  imports: [CommonModule],
})
export class WishlistModule {}


// imports: [CommonModule, AppRoutingModule, WishlistSignInModule],