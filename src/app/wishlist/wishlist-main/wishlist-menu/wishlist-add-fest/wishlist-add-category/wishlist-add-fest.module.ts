import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistAddFestComponent } from './wishlist-add-fest.component';
import {
  TuiButtonModule,
  TuiErrorModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { TuiFieldErrorPipeModule, TuiInputModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [WishlistAddFestComponent],
  exports: [WishlistAddFestComponent],
  imports: [
    CommonModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiButtonModule,
    TuiTextfieldControllerModule,
    TuiFieldErrorPipeModule,
    TuiErrorModule,
  ]
})
export class WishlistAddFestModule { }
