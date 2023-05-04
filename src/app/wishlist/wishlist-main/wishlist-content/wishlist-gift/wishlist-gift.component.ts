import { WishlistGift } from 'src/shared/modes/WishlistGift';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-wishlist-gift',
  templateUrl: './wishlist-gift.component.html',
  styleUrls: ['./wishlist-gift.component.less'],
})
export class WishlistGiftComponent {
  @Input() gift!: WishlistGift;
  @Input() isCategoryStatic!: boolean;
  @Input() isExpanded: boolean = false;
  @Output() toggleExpand = new EventEmitter<boolean>();
  @Output() delete = new EventEmitter<WishlistGift>();
  @Output() editGift = new EventEmitter<WishlistGift>();
  @Output() update = new EventEmitter<WishlistGift>();

  isDone = true;
  showItem: boolean = false;
  showData: boolean = false;

  deleteGift(): void {
    this.delete.emit(this.gift);
  }

  sendEditedGift(g: WishlistGift): void {
    this.editGift.emit(g);
  }

  toggleView(): void {
    this.isExpanded = !this.isExpanded;
    this.toggleExpand.emit(this.isExpanded);
  }

  toggleDoneStatus(): void {
    this.editGift.emit({
      ...this.gift,
      isDone: !this.gift.isDone,
      
    });
  }

  toggleTextareaEditor(): void {
    this.showItem = !this.showItem;
  }

  updateVal(value: WishlistGift): void {
    const updatedWishlistGift: WishlistGift = {
      giftTitle: value.giftTitle,
    };

    if (value.giftComment) {
      updatedWishlistGift.giftComment = value.giftComment;
    }

    this.toggleTextareaEditor();
    this.update.emit(updatedWishlistGift);
    this.toggleView();
  }

  onShowData() {
    if (this.isExpanded && this.showData) {
      this.showData = !this.showData;
      this.toggleView();
    } else {
      this.showData = !this.showData;
    }
  }
}
