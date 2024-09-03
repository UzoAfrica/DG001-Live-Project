import { useContext } from 'react';
import { CartContext, CartContextProps } from './CartProvider';

// Custom hook to use the Cart context
export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
