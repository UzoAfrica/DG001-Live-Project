import { createContext, useState, FC, ReactNode } from 'react';

// In CartProvider.tsx
export interface CartItem {
  id: string;
  price: number;
  quantity: number;
  name: string; // Remove optional (?) to ensure it is always a string
  description: string; // Remove optional (?) to ensure it is always a string
  // Remove the index signature or make sure it aligns exactly with the react-use-cart expectations
  [key: string]: string | number;
}

// Define the shape of the cart context
export interface CartContextProps {
  items: CartItem[];
  totalItems: number;
  cartTotal: number;
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  updateItemQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
}

// Create a context with a default value
export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

// CartProvider component
export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [cartTotal, setCartTotal] = useState<number>(0);

  const addItem = (item: CartItem) => {
    setItems((prevItems) => [...prevItems, item]);
    updateCartState();
  };

  const removeItem = (itemId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    updateCartState();
  };

  const updateItemQuantity = (itemId: string, quantity: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
    updateCartState();
  };

  const clearCart = () => {
    setItems([]);
    setTotalItems(0);
    setCartTotal(0);
  };

  const updateCartState = () => {
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalItems(totalItems);
    setCartTotal(total);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        cartTotal,
        addItem,
        removeItem,
        updateItemQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
