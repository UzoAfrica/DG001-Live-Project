import React, { useEffect, useState } from 'react';
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
  AddToCartButton, 
  RemoveButton 
} from './StyledWishlist';
import { getWishlist, removeFromWishlist } from '../../axiosFolder/functions/productFunction';
import { useCart } from 'react-use-cart';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

// CartItem interface as expected by react-use-cart
interface CartItem extends Product {
  quantity: number; // Add quantity property to satisfy CartItem type
}

const Wishlist: React.FC<{ userId: string }> = ({ userId }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const { addItem } = useCart();

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await getWishlist(userId);
        setWishlist(response.data);
      } catch (error) {
        console.error('Error fetching wishlist:', error);
      }
    };

    fetchWishlist();
  }, [userId]);

  // Update handleAddToCart to use CartItem type
  const handleAddToCart = (product: Product) => {
    // Create a CartItem object with the required quantity property
    const cartItem: CartItem = { ...product, quantity: 1 }; // Default quantity to 1
    addItem(cartItem); // Pass the CartItem object to addItem
  };

  const handleRemoveFromWishlist = async (productId: string) => {
    try {
      await removeFromWishlist(userId, productId);
      setWishlist((prevWishlist) => prevWishlist.filter((product) => product.id !== productId));
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  };

  return (
    <Container>
      <Title>Wishlist</Title>
      <WishlistContainer>
        {wishlist.map((product) => (
          <WishlistItem key={product.id}>
            <ProductImage src={product.imageUrl} alt={product.name} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
            </ProductInfo>
            <ButtonContainer>
              {/* Use handleAddToCart to add items to the cart */}
              <AddToCartButton onClick={() => handleAddToCart(product)}>Add to Cart</AddToCartButton>
              <RemoveButton onClick={() => handleRemoveFromWishlist(product.id)}>Remove</RemoveButton>
            </ButtonContainer>
          </WishlistItem>
        ))}
      </WishlistContainer>
    </Container>
  );
};

export default Wishlist;


