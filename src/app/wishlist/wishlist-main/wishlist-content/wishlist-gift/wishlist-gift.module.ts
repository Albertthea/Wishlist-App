import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WishlistGiftComponent } from './wishlist-gift.component';
import {
  TuiSvgModule,
  TuiButtonModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { WishlistAddGiftModule } from '../wishlist-add-gift/wishlist-add-gift.module';

import {
  TuiFieldErrorPipeModule,
  TuiInputDateModule,
  TuiInputModule,
} from '@taiga-ui/kit';
import { TuiDialogModule } from '@taiga-ui/core';

@NgModule({
  declarations: [WishlistGiftComponent],
  exports: [WishlistGiftComponent],
  imports: [
    CommonModule,
    TuiSvgModule,
    WishlistAddGiftModule,
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
export class WishlistGiftModule {}
