import { WishlistGift } from "./WishlistGift";

export interface WishlistFest {
  categoryId: string;
  categoryTitle: string;
  gifts: WishlistGift[];
}
