import { WishlistGift } from 'src/shared/modes/WishlistGift';
import { WishlistFest } from 'src/shared/modes/WishlistFest';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-wishlist-gift2',
  templateUrl: './wishlist-gift2.component.html',
  styleUrls: ['./wishlist-gift2.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishlistGiftComponent2 {
  @Input() fest!: WishlistFest;
  @Input() gift!: WishlistGift;
  @Output() editGift = new EventEmitter<WishlistGift>();
  isExpanded = false;

  toggleView(): void {
    this.isExpanded = !this.isExpanded;
  }

  toggleDoneStatus(): void {
    if (this.gift) {
      this.editGift.emit({
        ...this.gift,
        isDone: !this.gift.isDone,
      });
    } else {
      console.error('Gift is not defined');
    }
  }
}
