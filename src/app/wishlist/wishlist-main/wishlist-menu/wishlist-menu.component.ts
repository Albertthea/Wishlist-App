import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishlistFest } from 'src/shared/modes/WishlistFest';

@Component({
  selector: 'app-wishlist-menu',
  templateUrl: './wishlist-menu.component.html',
  styleUrls: ['./wishlist-menu.component.less']
})
export class WishlistMenuComponent {
  @Input() data!: WishlistFest[];
  @Input() staticCategories!: WishlistFest[];
  @Input() userEmail!: string;
  @Input() userUid!: string;
  @Output() addFest = new EventEmitter<WishlistFest>();
  @Output() editFest = new EventEmitter<WishlistFest>();
  @Output() delFest = new EventEmitter<string>();
  @Output() festSelected = new EventEmitter<string>();

  isFormExpanded: boolean = false;


  sendNewFest(fest: WishlistFest): void {
    this.addFest.emit(fest);
  }

  sendEditedFest(c: WishlistFest) {
    this.editFest.emit(c);
  }

  sendDeletedFest(id: string) {
    this.delFest.emit(id);
  }

  selectFest(fest: WishlistFest): void {
    this.festSelected.emit(fest.festId);
  }

  toggleFormView(): void {
    this.isFormExpanded = !this.isFormExpanded;
  }
}
