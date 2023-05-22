export interface WishlistGift {
  giftId: string;
  giftTitle: string;
  giftDeadline: string;
  giftComment?: string;
  giftLink?: string;
  isDone: boolean;
  isStarred: boolean;
  parentFestTitle: string;
  parentFestId: string;
}
