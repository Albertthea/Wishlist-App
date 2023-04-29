import { WishlistGift } from "./WishlistGift";

export interface WishlistCategory {
  categoryId: string;
  categoryTitle: string;
  gifts: WishlistGift[];
}
