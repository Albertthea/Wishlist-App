import { WishlistGift } from './WishlistGift';

export interface WishlistFest {
  festId: string;
  festTitle: string;
  gifts: WishlistGift[];
}
