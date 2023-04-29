export interface WishlistGift {
  giftId: string;
  giftTitle: string;
  giftComment?: string;
  isDone: boolean;
  parentCategoryTitle: string;
  parentCategoryId: string;
}
