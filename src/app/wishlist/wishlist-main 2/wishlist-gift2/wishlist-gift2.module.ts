import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WishlistGiftComponent2 } from './wishlist-gift2.component';
import {
  TuiSvgModule,
  TuiButtonModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';

import {
  TuiFieldErrorPipeModule,
  TuiInputDateModule,
  TuiInputModule,
} from '@taiga-ui/kit';
import { TuiDialogModule } from '@taiga-ui/core';

@NgModule({
  declarations: [WishlistGiftComponent2],
  exports: [WishlistGiftComponent2],
  imports: [
    CommonModule,
    TuiSvgModule,
    TuiButtonModule,
    TuiTextfieldControllerModule,
    ReactiveFormsModule,
    TuiFieldErrorPipeModule,
    TuiInputDateModule,
    TuiInputModule,
    FormsModule,
    TuiDialogModule,
  ],
})
export class WishlistGiftModule2 {}
