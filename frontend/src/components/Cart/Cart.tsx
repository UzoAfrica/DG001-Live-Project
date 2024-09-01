import React, { useEffect, useState } from 'react';
import {Container, Title, CartContainer, CartItem, ProductImage, ProductInfo, ProductName, ProductDescription, ProductPrice, ButtonContainer, RemoveButton } from '../Cart/StyledCart';
import { getCart, removeFromCart } from '../../axiosFolder/functions/productFunction';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const Cart: React.FC<{ userId: string }> = ({ userId }) => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await getCart(userId);
        setCart(response.data);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    fetchCart();
  }, [userId]);

  const handleRemoveFromCart = async (productId: string) => {
    try {
      await removeFromCart(userId, productId);
      setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  return (
    <Container>
      <Title>Cart</Title>
      <CartContainer>
        {cart.map((product) => (
          <CartItem key={product.id}>
            <ProductImage src={product.imageUrl} alt={product.name} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
            </ProductInfo>
            <ButtonContainer>
              <RemoveButton onClick={() => handleRemoveFromCart(product.id)}>Remove</RemoveButton>
            </ButtonContainer>
          </CartItem>
        ))}
      </CartContainer>
    </Container>
  );
};

export default Cart;
