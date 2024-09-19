import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  AddToCartButton,
  DeleteButton,
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
  const navigate = useNavigate(); 

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

  // Function to handle view more button click and navigate to the product details page
  const handleViewMore = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  // Function to handle adding product to the cart
  const handleAddToCart = (product: Product) => {
    try {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const existingProduct = cart.find((item: Product) => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Product added to cart!');
    } catch (error) {
      alert('Error adding product to cart');
      console.error('Error adding product to cart:', error);
    }
  };

  // Function to handle deleting product from wishlist
  const handleDeleteFromWishlist = (productId: string) => {
    try {
      const updatedWishlist = wishlist.filter((product) => product.id !== productId);
      setWishlist(updatedWishlist);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      alert('Product removed from wishlist!');
    } catch (error) {
      alert('Error deleting product from wishlist');
      console.error('Error deleting product from wishlist:', error);
    }
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
                  <ViewMoreButton onClick={() => handleViewMore(product.id)}>
                    View More
                  </ViewMoreButton>
                  <AddToCartButton onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </AddToCartButton>
                  <DeleteButton onClick={() => handleDeleteFromWishlist(product.id)}>
                    Delete
                  </DeleteButton>
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
