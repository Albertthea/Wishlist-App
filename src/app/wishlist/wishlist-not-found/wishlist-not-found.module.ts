import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistNotFoundComponent } from './wishlist-not-found.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [WishlistNotFoundComponent],
  exports: [WishlistNotFoundComponent],
  imports: [CommonModule, BrowserModule],
})
export class WishlistNotFoundModule {}
