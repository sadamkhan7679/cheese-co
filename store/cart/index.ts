import { create } from "zustand";
import { CartItem } from "@/types/cart";

type CartState = {
  cartItems: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeCartItem: (id: string) => void;
  updateCartItemQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalCartItems: number;
};

export const useCartStore = create<CartState>((set, get) => ({
  cartItems: [],
  addItemToCart: (item) => {
    set((state) => {
      const existingItem = state.cartItems.find((i) => i.id === item.id);
      if (existingItem) {
        // If the item already exists, update the quantity
        return {
          items: state.cartItems.map((i) =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i,
          ),
        };
      } else {
        // If the item does not exist, add it to the cart
        return { cartItems: [...state.cartItems, item] };
      }
    });
  },
  removeCartItem: (id) => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    }));
  },
  updateCartItemQuantity: (id, quantity) => {
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      ),
    }));
  },
  clearCart: () => {
    set({ cartItems: [] });
  },
  get totalCartItems() {
    return get().cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
  },
}));
