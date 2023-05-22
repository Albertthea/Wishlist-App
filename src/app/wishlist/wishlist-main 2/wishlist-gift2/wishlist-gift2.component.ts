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
  selector: 'app-wishlist-gift',
  templateUrl: './wishlist-gift2.component.html',
  styleUrls: ['./wishlist-gift2.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishlistGiftComponent2 {
  @Input() fest!: WishlistFest;
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
