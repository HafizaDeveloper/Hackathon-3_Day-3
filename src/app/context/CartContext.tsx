'use client'
// src/app/context/CartContext.tsx
import { createContext, useContext, useState } from 'react';

type Food = {
  _id: string;
  name: string;
  category: string;
  price: number;
  description?: string;
  image: { asset: { url: string } };
  quantity: number;
};

type CartContextType = {
  cart: Food[];
  addToCart: (item: Food) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Food[]>([]);

  const addToCart = (item: Food) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item._id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
