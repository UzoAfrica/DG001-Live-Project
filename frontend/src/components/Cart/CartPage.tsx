import React, { FC, useState, useEffect } from 'react';
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
  Button,
  ClearCartButton,
} from './CartStyled';
import { initiatePayment } from '../../axiosFolder/functions/paymentFunction';

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

  const userEmail = localStorage.getItem('userEmail') || '';

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        const cartItems = JSON.parse(savedCart);
        setItems(cartItems);

        // Calculate total price and items
        const total = cartItems.reduce(
          (acc: number, item: Item) => acc + item.price * item.quantity,
          0
        );
        const totalItemCount = cartItems.reduce(
          (acc: number, item: Item) => acc + item.quantity,
          0
        );

        setCartTotal(total);
        setTotalItems(totalItemCount);
      }
    } catch (error) {
      setError('Error fetching cart');
      console.error('Error fetching cart from local storage:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleAddItem = (productId: string) => {
    const updatedCart = items.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (itemId: string) => {
    const updatedCart = items.filter((item) => item.id !== itemId);

    setItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handlePaymentInitiation = async () => {
    try {
      const token = localStorage.getItem('token'); 
      const userId = localStorage.getItem('userId'); 
      if (!token || !userId) {
        alert('User not logged in!');
        return;
      }

      const response = await initiatePayment(cartTotal, userEmail, userId, items[0].id);
      if (response?.data?.authorizationUrl) {
        // Redirect to Paystack checkout page
        window.location.href = response.data.authorizationUrl;
      } else {
        alert('Error initiating payment.');
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
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
                      <ItemPrice>{item.price} ₦</ItemPrice>
                      <ItemQuantity>
                        <QuantityButton onClick={() => handleAddItem(item.id)}>
                          &minus;
                        </QuantityButton>
                        <Quantity>{item.quantity}</Quantity>
                        <QuantityButton onClick={() => handleAddItem(item.id)}>
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
                  <ClearCartButton
                    onClick={() => {
                      setItems([]);
                      setCartTotal(0);
                      setTotalItems(0);
                      localStorage.removeItem('cart');
                    }}
                  >
                    Empty Cart
                  </ClearCartButton>

                  <Button onClick={handlePaymentInitiation}>Checkout</Button>
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

