import { WishlistGift } from 'src/shared/modes/WishlistGift';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-wishlist-gift',
  templateUrl: './wishlist-gift.component.html',
  styleUrls: ['./wishlist-gift.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishlistGiftComponent {
  @Input() gift!: WishlistGift;
  @Input() isFestStatic!: boolean;
  @Output() delete = new EventEmitter<WishlistGift>();
  @Output() editGift = new EventEmitter<WishlistGift>();

  isExpanded = false;

  sendEditedGift(t: WishlistGift): void {
    this.editGift.emit(t);
  }

  toggleView(): void {
    this.isExpanded = !this.isExpanded;
  }

  toggleDoneStatus(): void {
    this.editGift.emit({
      ...this.gift,
      isDone: !this.gift.isDone,
    });
  }
}
