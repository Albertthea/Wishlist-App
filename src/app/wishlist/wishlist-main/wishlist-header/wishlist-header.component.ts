import { Component, Input } from '@angular/core';
import { TuiDay } from '@taiga-ui/cdk';
import { WishlistFest } from 'src/shared/modes/WishlistFest';

@Component({
  selector: 'app-wishlist-header',
  templateUrl: './wishlist-header.component.html',
  styleUrls: ['./wishlist-header.component.less'],
})
export class WishlistHeaderComponent {
  @Input() category!: WishlistFest;

  currentDate = TuiDay.currentLocal();
}
