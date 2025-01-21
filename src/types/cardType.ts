import { MenuItem } from "./restaurantType";

export interface CardItem extends MenuItem {
  quantity: number;
}

export type CardState = {
  card: CardItem[];
  addToCart: (item: MenuItem) => void;
  clearCart: () => void;
  removeFromTheCart: (id: string) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
};
