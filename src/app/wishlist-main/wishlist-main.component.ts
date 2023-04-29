import { Component, OnInit } from '@angular/core';
import { WishlistCategory } from 'src/shared/modes/WishlistCategory';
import { WishlistGift } from 'src/shared/modes/WishlistGift';

@Component({
  selector: 'app-wishlist-main',
  templateUrl: './wishlist-main.component.html',
  styleUrls: ['./wishlist-main.component.less'],
})
export class WishlistMainComponent implements OnInit {
  constructor() {
    this.currentCategoryId = '';
  }

  categories: WishlistCategory[] = [];
  currentCategoryId: string;
  gifts: WishlistGift[] = [];

  ngOnInit() {
    this.currentCategoryId = 'someCategoryID';
  }

  getCurrentCategory(): WishlistCategory {
    const category = this.categories.find(
      (c) => c.categoryId === this.currentCategoryId
    );
    return category || { categoryId: '', categoryTitle: '', gifts: [] };
  }

  addCategory(category: WishlistCategory): void {
    this.categories.push(category);
  }

  editCategory(category: WishlistCategory): void {
    const index = this.categories.findIndex(
      (c) => c.categoryId === category.categoryId
    );
    if (index !== -1) {
      this.categories[index] = category;
    }
  }

  deleteCategory(id: string): void {
    const index = this.categories.findIndex((c) => c.categoryId === id);
    if (index !== -1) {
      this.categories.splice(index, 1);
    }
  }

  setCurrentCategory(id: string): void {
    this.currentCategoryId = id;
  }

  addgift(gift: WishlistGift): void {
    this.gifts.push(gift);
  }

  editgift(gift: WishlistGift): void {
    const index = this.gifts.findIndex((t) => t.giftId === gift.giftId);
    if (index !== -1) {
      this.gifts[index] = gift;
    }
  }

  deletegift(gift: WishlistGift): void {
    const index = this.gifts.findIndex((t) => t.giftId === gift.giftId);
    if (index !== -1) {
      this.gifts.splice(index, 1);
    }
  }
}
