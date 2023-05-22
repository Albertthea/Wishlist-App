import {Component, EventEmitter, Input, Output } from '@angular/core';
import { WishlistFest } from 'src/shared/modes/WishlistFest';

@Component({
  selector: 'app-wishlist-link',
  templateUrl: './wishlist-link.component.html',
  styleUrls: ['./wishlist-link.component.less']
})
export class WishlistLinkComponent {
  @Input() fest!: WishlistFest;
  @Input() isFestStatic: boolean = false;
  @Output() editFest = new EventEmitter<WishlistFest>();
  @Output() delFest = new EventEmitter<string>();

  isExpanded = false;

  toggleView(event: Event): void {
    event.stopPropagation();
    this.isExpanded = !this.isExpanded;
  }

  sendEditedFest(c: WishlistFest) {
    this.editFest.emit(c);
  }

  deleteFest(event: Event) {
    event.stopPropagation();
    this.delFest.emit(this.fest.festId);
  }
}
