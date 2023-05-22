import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistProfileComponent } from './wishlist-profile.component';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';

@NgModule({
  declarations: [WishlistProfileComponent],
  exports: [WishlistProfileComponent],
  imports: [CommonModule, TuiButtonModule, TuiSvgModule],
})
export class WishlistProfileModule {}
