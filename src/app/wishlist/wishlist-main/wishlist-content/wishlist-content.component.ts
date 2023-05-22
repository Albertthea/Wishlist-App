import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishlistFest } from 'src/shared/modes/WishlistFest';
import { WishlistGift } from 'src/shared/modes/WishlistGift';

@Component({
  selector: 'app-wishlist-content',
  templateUrl: './wishlist-content.component.html',
  styleUrls: ['./wishlist-content.component.less'],
})
export class WishlistContentComponent {
  @Input() fest!: WishlistFest;
  @Output() addGift = new EventEmitter<WishlistGift>();
  @Output() editGift = new EventEmitter<WishlistGift>();
  @Output() delGift = new EventEmitter<WishlistGift>();

  sendCreatedGift(gift: WishlistGift): void {
    this.addGift.emit(gift);
  }

  sendEditedGift(gift: WishlistGift): void {
    this.editGift.emit(gift);
  }

  sendGiftDeleting(gift: WishlistGift): void {
    this.delGift.emit(gift);
  }
}
