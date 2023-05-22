import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistAddGiftComponent } from './wishlist-add-gift.component';
import {
  TuiButtonModule,
  TuiErrorModule,
  TuiSvgModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
  TuiFieldErrorPipeModule,
  TuiInputDateModule,
  TuiInputModule,
} from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [WishlistAddGiftComponent],
  exports: [WishlistAddGiftComponent],
  imports: [
    CommonModule,
    TuiSvgModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiInputDateModule,
    TuiButtonModule,
    TuiTextfieldControllerModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
  ],
})
export class WishlistAddGiftModule {}
