declare module 'react-use-cart' {
  export interface CartItem {
    id: string;
    price: number;
    quantity: number;
    [key: string]: string | number; // Replace `any` with specific types like `string | number`
  }

  export interface UseCart {
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    items: CartItem[];
    cartTotal: number;
    // Add more type declarations as needed based on the actual usage
  }

  export function useCart(): UseCart;
}
