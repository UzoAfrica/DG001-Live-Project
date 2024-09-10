import React, { FC, useState, useEffect } from 'react';
import { PaystackButton } from 'react-paystack';
import {
  CartBackground,
  CartContainer,
  Title,
  CartHeader,
  EmptyCartMessage,
  CartTable,
  CartItem,
  ItemImage,
  ItemTitle,
  ItemPrice,
  ItemQuantity,
  QuantityButton,
  Quantity,
  RemoveButton,
  CartFooter,
  TotalItems,
  TotalAmount,
  FooterButtons,
  ClearCartButton,
} from './CartStyled';
import { getCart, addToCart, removeFromCart } from '../../axiosFolder/functions/productFunction'; 

interface CartProps {
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Item {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart: FC<CartProps> = ({ setOpenCart }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Get user information from local storage
  const userId = localStorage.getItem('userId');
  const userEmail = localStorage.getItem('userEmail');

  useEffect(() => {
    const fetchCart = async () => {
      try {
        if (!userId) {
          setError('User not logged in.');
          return;
        }
        const response = await getCart(userId);
        setItems(response.data.items || []);
        setCartTotal(response.data.cartTotal || 0);
        setTotalItems(response.data.totalItems || 0);
      } catch (err) {
        setError('Error fetching cart data');
        console.error('Error fetching cart data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [userId]);

  const handleAddItem = async (productId: string) => {
    try {
      if (!userId) {
        setError('User not logged in.');
        return;
      }
      await addToCart(userId, productId); 
      const response = await getCart(userId);
      setItems(response.data.items || []);
      setCartTotal(response.data.cartTotal || 0);
      setTotalItems(response.data.totalItems || 0);
    } catch (err) {
      console.error('Error adding item to cart:', err);
    }
  };

  const handleRemoveItem = async (itemId: string) => {
    try {
      if (!userId) {
        setError('User not logged in.');
        return;
      }
      await removeFromCart(userId, itemId);
      setItems((prevItems) => prevItems.filter(item => item.id !== itemId));
    } catch (err) {
      console.error('Error removing item from cart:', err);
    }
  };

  // Handle payment success
  const handlePaymentSuccess = (reference: Record<string, any>) => {
    alert('Payment successful! Reference: ' + reference.reference);

    // Clear the cart after successful payment
    setItems([]);
    setCartTotal(0);
    setTotalItems(0);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Title>Cart</Title>
      <CartBackground>
        <CartContainer>
          <CartHeader>
            <i
              style={{ cursor: 'pointer' }}
              className="fa fa-times"
              aria-hidden="true"
              onClick={() => setOpenCart(false)}
            ></i>
          </CartHeader>

          {items.length === 0 ? (
            <EmptyCartMessage>Your shopping cart is empty</EmptyCartMessage>
          ) : (
            <>
              <CartTable>
                <tbody>
                  {items.map((item, index) => (
                    <CartItem key={index}>
                      <td>
                        <ItemImage src={item.image} alt={item.title} />
                      </td>
                      <ItemTitle>{item.title}</ItemTitle>
                      <ItemPrice>{item.price} €</ItemPrice>
                      <ItemQuantity>
                        <QuantityButton
                          onClick={() => handleAddItem(item.id)} 
                        >
                          &minus;
                        </QuantityButton>
                        <Quantity>{item.quantity || 0}</Quantity>
                        <QuantityButton
                          onClick={() => handleAddItem(item.id)} 
                        >
                          &#43;
                        </QuantityButton>
                      </ItemQuantity>
                      <td>
                        <RemoveButton onClick={() => handleRemoveItem(item.id)}>
                          <i className="fa fa-trash" aria-hidden="true" />
                        </RemoveButton>
                      </td>
                    </CartItem>
                  ))}
                </tbody>
              </CartTable>

              <CartFooter>
                <TotalItems>Number of item(s): {totalItems}</TotalItems>
                <TotalAmount>Total: {cartTotal} ₦</TotalAmount>
                <FooterButtons>
                  <ClearCartButton onClick={() => { 
                    setItems([]);
                    setCartTotal(0);
                    setTotalItems(0);
                  }}>
                    Empty Cart
                  </ClearCartButton>

                  <PaystackButton
                    text="Checkout"
                    email={userEmail || ''} 
                    amount={cartTotal * 100} 
                    publicKey="your_paystack_public_key" 
                    onSuccess={handlePaymentSuccess}
                    onClose={() => alert("Payment closed")}
                  />

                </FooterButtons>
              </CartFooter>
            </>
          )}
        </CartContainer>
      </CartBackground>
    </>
  );
};

export default Cart;
