import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigate
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

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const Wishlist: React.FC = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]); 
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null); 
  const navigate = useNavigate(); // Initialize navigate for routing

  // Fetch wishlist from local storage when component mounts
  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem('wishlist');
      if (savedWishlist) {
        setWishlist(JSON.parse(savedWishlist)); 
      }
    } catch (error) {
      setError('Error fetching wishlist');
      console.error('Error fetching wishlist from local storage:', error);
    } finally {
      setLoading(false); 
    }
  }, []);

  // Function to handle view more button click
  const handleViewMore = () => {
    navigate('/product'); // Navigate to /product
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Title>Wishlist</Title>
      <Container>
        <WishlistContainer>
          {wishlist.length === 0 ? (
            <p>Your wishlist is empty.</p>
          ) : (
            wishlist.map((product) => (
              <WishlistItem key={product.id}>
                <ProductImage src={product.imageUrl} alt={product.name} />
                <ProductInfo>
                  <ProductName>{product.name}</ProductName>
                  <ProductDescription>
                    {product.description || 'No description available'}
                  </ProductDescription>
                  <ProductPrice>
                    ₦{product.price.toLocaleString()}{' '}
                    <span style={{ color: 'green' }}>Negotiable</span>
                  </ProductPrice>
                </ProductInfo>
                <ButtonContainer>
                  <ViewMoreButton onClick={handleViewMore}>
                    View More
                  </ViewMoreButton>
                </ButtonContainer>
              </WishlistItem>
            ))
          )}
        </WishlistContainer>
      </Container>
    </>
  );
};

export default Wishlist;
