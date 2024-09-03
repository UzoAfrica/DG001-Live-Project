import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
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
  CheckoutButton,
} from './CartStyled';

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

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get('/api/cart');
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
  }, []);

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
                          onClick={() => {
                            /* Update item quantity logic here */
                          }}
                        >
                          &minus;
                        </QuantityButton>
                        <Quantity>{item.quantity || 0}</Quantity>
                        <QuantityButton
                          onClick={() => {
                            /* Update item quantity logic here */
                          }}
                        >
                          &#43;
                        </QuantityButton>
                      </ItemQuantity>
                      <td>
                        <RemoveButton
                          onClick={() => {
                            /* Remove item logic here */
                          }}
                        >
                          <i className="fa fa-trash" aria-hidden="true" />
                        </RemoveButton>
                      </td>
                    </CartItem>
                  ))}
                </tbody>
              </CartTable>

              <CartFooter>
                <TotalItems>Number of item(s): {totalItems}</TotalItems>
                <TotalAmount>Total: {cartTotal} €</TotalAmount>
                <FooterButtons>
                  <ClearCartButton
                    onClick={() => {
                      /* Empty cart logic here */
                    }}
                  >
                    Empty Cart
                  </ClearCartButton>
                  <CheckoutButton type="submit">Checkout</CheckoutButton>
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
