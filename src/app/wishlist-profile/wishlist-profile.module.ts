import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistProfileComponent } from './wishlist-profile.component';
import { TuiBadgeModule, TuiInputModule } from '@taiga-ui/kit';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  TuiButtonModule,
  TuiTextfieldControllerModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [WishlistProfileComponent],
  exports: [WishlistProfileComponent],
  imports: [
    CommonModule,
    TuiBadgeModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiButtonModule,
    BrowserModule,
    FormsModule,
    TuiSvgModule,
  ],
})
export class WishlisProfilenModule {}
