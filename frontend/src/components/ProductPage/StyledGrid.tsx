import styled from 'styled-components';
import React, { useState } from 'react';
import { Product } from './ProductList';

interface StyledGridProps {
  products: Product[];
  onAddToWishlist: (productId: number) => void;
  onAddToCart: (productId: number) => void;
  onBuyNow: (productId: number) => void;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 5px;
`;

const ProductItem = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
    

  &:hover {
    transform: scale(1.05);
    background-color: antiquewhite;  
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: scale-down;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2px;
  padding: 2px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #ffffff;
    width: 100%;
`;

const ProductName = styled.h2`
  margin: 5px 0;
  font-size: 1.2em;
`;

const ProductDescription = styled.p`
  margin: 5px 0;
  font-size: 0.9em;
`;

const ProductPrice = styled.p`
  margin: 5px 0;
  font-weight: bold;
  color: green;
`;

const WishlistIcon = styled.span<{ isWished: boolean }>`
  cursor: pointer;
  color: ${(props) => (props.isWished ? 'red' : 'gray')};
  font-size: 1.5em;
`;

const StyledGrid: React.FC<StyledGridProps> = ({ products, onAddToWishlist, onAddToCart, onBuyNow }) => {
  const [wishedProducts, setWishedProducts] = useState({});

  const toggleWish = (id) => {
    setWishedProducts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Grid>
      {products.map((product) => (
        <ProductItem key={product.id} className="product">
          <ProductImage src={product.imageUrl} alt={product.name} />
          <ProductDetails>
            <ProductName>{product.name}</ProductName>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>{product.price}</ProductPrice>
            <button onClick={() => onAddToWishlist(product.id)}>Add to Wishlist</button>
            <button onClick={() => onAddToCart(product.id)}>Add to Cart</button>
            <button onClick={() => onBuyNow(product.id)}>Buy Now</button>
            <WishlistIcon
              isWished={!!wishedProducts[product.id]}
              onClick={() => toggleWish(product.id)}
            >
              ♥
            </WishlistIcon>
          </ProductDetails>
        </ProductItem>
      ))}
    </Grid>
  );
};

export default StyledGrid;
