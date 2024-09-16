import React, { FC, useContext, useEffect } from 'react';
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
import {
  initiatePayment,
  verifyPayment,
  VerifyPaymentResponse,
} from '../../axiosFolder/functions/paymentFunction';
import { showErrorToast, showSuccessToast } from '../utils/toastify';
import { CartContext, CartContextProps } from './CartProvider';

interface CartProps {
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart: FC<CartProps> = ({ setOpenCart }) => {
  const {
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    clearCart,
  } = useContext(CartContext) as CartContextProps;

  const userEmail = localStorage.getItem('userEmail') || '';

  useEffect(() => {
    const paymentReference = localStorage.getItem('paymentReference');
    const checkPayment = async () => {
      if (paymentReference) {
        try {
          const response = (await verifyPayment(
            paymentReference
          )) as VerifyPaymentResponse;

          if (!response?.status) {
            showErrorToast(response.message);
            localStorage.removeItem('paymentReference');
          } else {
            showSuccessToast(response.message!);
            localStorage.removeItem('paymentReference');
            clearCart();
          }
        } catch (error) {
          if (error instanceof Error) {
            showErrorToast(error.message);
          }
        }
      }
    };
    checkPayment();
  }, []);

  const handleAddItem = (productId: string) => {
    const item = items.find((item) => item.id === productId);
    if (item) {
      updateItemQuantity(productId, item.quantity + 1);
    }
  };

  const handleRemoveItem = (productId: string) => {
    const item = items.find((item) => item.id === productId);
    if (item && item.quantity > 1) {
      updateItemQuantity(productId, item.quantity - 1);
    }
  };

  const handleDeleteItem = (itemId: string) => {
    removeItem(itemId);
  };

  const handlePaymentInitiation = async () => {
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      if (!token || !userId) {
        showErrorToast('User not logged in!');
        return;
      }

      const redirectPage = 'cart';
      const response = await initiatePayment(
        cartTotal,
        userEmail,
        userId,
        items[0].id,
        redirectPage
      );
      if (response?.data?.authorizationUrl) {
        localStorage.setItem('paymentReference', response.data.reference);
        window.location.href = response.data.authorizationUrl;
      } else {
        showErrorToast('Error initiating payment.');
      }
    } catch (error) {
      if (error instanceof Error) {
        showErrorToast(error.message);
      }
    }
  };

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
                        <ItemImage
                          src={item.imageUrl[0] || '/placeholder-image.jpg'}
                          alt={item.name}
                        />
                      </td>
                      <ItemTitle>{item.name}</ItemTitle>
                      <ItemPrice>{item.price.toLocaleString()} ₦</ItemPrice>
                      <ItemQuantity>
                        <QuantityButton
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          &minus;
                        </QuantityButton>
                        <Quantity>{item.quantity}</Quantity>
                        <QuantityButton onClick={() => handleAddItem(item.id)}>
                          &#43;
                        </QuantityButton>
                      </ItemQuantity>
                      <td>
                        <RemoveButton onClick={() => handleDeleteItem(item.id)}>
                          <i className="fa fa-trash" aria-hidden="true" />
                        </RemoveButton>
                      </td>
                    </CartItem>
                  ))}
                </tbody>
              </CartTable>

              <CartFooter>
                <TotalItems>Number of item(s): {totalItems}</TotalItems>
                <TotalAmount>Total: {cartTotal.toLocaleString()} ₦</TotalAmount>
                <FooterButtons>
                  <ClearCartButton onClick={clearCart}>
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
