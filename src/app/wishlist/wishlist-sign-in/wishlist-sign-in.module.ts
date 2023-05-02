import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistSignInComponent } from './wishlist-sign-in.component';
import { TuiBadgeModule, TuiInputModule } from '@taiga-ui/kit';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [WishlistSignInComponent],
  exports: [WishlistSignInComponent],
  imports: [
    CommonModule,
    TuiBadgeModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiButtonModule,
    BrowserModule,
    FormsModule,
  ],
})
export class WishlistSignInModule {}
