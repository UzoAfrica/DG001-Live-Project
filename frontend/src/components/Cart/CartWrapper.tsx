import React from 'react';
import { useOutletContext } from 'react-router-dom';
import CartPage from './CartPage'; 

// Define the type for the outlet context
interface OutletContext {
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}

// Wrapper component to pass setOpenCart to CartPage component
const CartWrapper: React.FC = () => {
  const { setOpenCart } = useOutletContext<OutletContext>();
  return <CartPage setOpenCart={setOpenCart} />; 
};

export default CartWrapper;
