import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishlistGift } from 'src/shared/modes/WishlistGift';
import { WishlistFest } from 'src/shared/modes/WishlistFest';

const data: WishlistGift[] = [
  {
    giftTitle: 'сумка hello kitty',
    giftComment: 'розовая',
  },
  {
    giftTitle: 'Iphone Pro Max XXL',
    giftComment: 'розовый',
  },
];

@Component({
  selector: 'app-wishlist-content',
  templateUrl: './wishlist-content.component.html',
  styleUrls: ['./wishlist-content.component.less'],
})
export class WishlistContentComponent {
  @Input() fest!: WishlistFest;
  @Output() editGift = new EventEmitter<WishlistGift>();
  @Output() delGift = new EventEmitter<WishlistGift>();
  // @Output() add = new EventEmitter<WishlistGift>();
  
  gifts: WishlistGift[] = [];
  isFormExpanded: boolean = false;
  expandedItem = -1;
  expanded: boolean = false;

  ngOnInit(): void {
    this.gifts = data;
  }

  sendEditedGift(gift: WishlistGift): void {
    this.editGift.emit(gift);
  }

  onToggleExpand(index: number) {
    this.expandedItem = this.expandedItem === index ? -1 : index;
  }

  sendGiftDeleting(gift: WishlistGift): void {
    this.delGift.emit(gift);
  }

  toggle(): void {
    this.expanded = !this.expanded;
  }

  addGift(gift: WishlistGift): void {
    this.gifts.push(gift);
    this.toggle();
 }
}
