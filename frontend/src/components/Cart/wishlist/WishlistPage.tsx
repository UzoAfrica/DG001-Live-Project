import React, { useState, useEffect } from 'react';
import {
  Container,
  Title,
  WishlistContainer,
  WishlistItem,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductDescription,
  ProductPrice,
  ButtonContainer,
  ViewMoreButton,
} from './StyledWishlist';
import api from '../../utils/Api'; // Ensure this is your Axios instance or API utility file

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const Wishlist: React.FC = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]); // State for storing wishlist items

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await api.get('/api/user/wishlist');  // Your backend endpoint for fetching wishlist
        setWishlist(response.data);
      } catch (error) {
        console.error('Error fetching wishlist:', error); // Log any error if fetching fails
      }
    };

    fetchWishlist(); // Fetch wishlist data when component mounts
  }, []);

  const handleViewMore = (productId: string) => {
    // Navigate to product info page or handle action
    console.log('View more clicked for product:', productId);
  };

  return (
    <>
    <Title>Wishlist</Title>
    <Container>
      <WishlistContainer>
        {wishlist.map((product) => (
          <WishlistItem key={product.id}>
            <ProductImage src={product.imageUrl} alt={product.name} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductDescription>
                The customer is very happy to be followed.
              </ProductDescription>
              <ProductPrice>
                ₦{product.price.toLocaleString()} <span style={{ color: 'green' }}>Negotiable</span>
              </ProductPrice>
            </ProductInfo>
            <ButtonContainer>
              <ViewMoreButton onClick={() => handleViewMore(product.id)}>View More</ViewMoreButton>
            </ButtonContainer>
          </WishlistItem>
        ))}
      </WishlistContainer>
    </Container>
    </>
  );
};

export default Wishlist;
