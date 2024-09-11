import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  ProductImage,
  ProductDetails,
  ProductName,
  ProductDescription,
  ProductPrice,
  ButtonContainer,
  WishlistButton,
  CartButton,
  SimilarProductsSection,
  SimilarProductItem,
  SimilarProductImage,
  StyledPaystackButton,
} from '../productInfo/productInfoStyled';
import {
  getProducts,
} from '../../../axiosFolder/functions/productFunction';
import { initiatePayment, } from '../../../axiosFolder/functions/paymentFunction';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  type: string;
  quantity?: number;
}

const ProductInfoPage: FC = () => {
  const [mainProduct, setMainProduct] = useState<Product | null>(null);
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { productId } = useParams<{ productId: string }>();

  const token = localStorage.getItem('token');

  // const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts({
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.data && response.data.length > 0) {
          setMainProduct(response.data[0]);
          setSimilarProducts(response.data.slice(1));
        } else {
          setError('No products found');
        }
      } catch (error) {
        setError('Error fetching products');
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [productId, token]);

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
      console.error('Error adding product to cart:', error);
    }
  };

  const handleAddToWishlist = (product: Product) => {
    try {
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      const existingProduct = wishlist.find((item: Product) => item.id === product.id);

      if (existingProduct) {
        alert('Product is already in your wishlist!');
      } else {
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        alert('Product added to wishlist!');
      }
    } catch (error) {
      console.error('Error adding product to wishlist:', error);
    }
  };

  const handlePaymentInitiation = async () => {
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const userEmail = localStorage.getItem('userEmail');
      
      // Ensure the mainProduct is loaded
      if (!mainProduct) {
        alert('Product information not available!');
        return;
      }
  
      if (!token || !userId || !userEmail) {
        alert('User not logged in!');
        return;
      }
  
      // Initiating payment for the specific product
      const response = await initiatePayment(mainProduct.price, userEmail, userId, mainProduct.id);
  
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
    <Container>
      {mainProduct ? (
        <>
          <ProductImage src={mainProduct.imageUrl} alt={mainProduct.name} />
          <ProductDetails>
            <ProductName>{mainProduct.name}</ProductName>
            <ProductDescription>{mainProduct.description}</ProductDescription>
            <ProductPrice>₦{mainProduct.price.toLocaleString()}</ProductPrice>
            <ButtonContainer>
              <WishlistButton onClick={() => handleAddToWishlist(mainProduct)}>
                Add to Wishlist
              </WishlistButton>
              <CartButton onClick={() => handleAddToCart(mainProduct)}>Add to Cart</CartButton>
            </ButtonContainer>

            {/* Paystack Payment Button */}
            <StyledPaystackButton>
              <button onClick={handlePaymentInitiation}>Buy Now</button>
            </StyledPaystackButton>
          </ProductDetails>

          {/* Similar Products Section */}
          <SimilarProductsSection>
            <h3>Similar Products</h3>
            <div>
              {similarProducts.map((similarProduct) => (
                <SimilarProductItem key={similarProduct.id}>
                  <SimilarProductImage
                    src={similarProduct.imageUrl}
                    alt={similarProduct.name}
                  />
                  <p>{similarProduct.name}</p>
                  <p>₦{similarProduct.price.toLocaleString()}</p>
                </SimilarProductItem>
              ))}
            </div>
          </SimilarProductsSection>
        </>
      ) : (
        <p>No products found.</p>
      )}
    </Container>
  );
};

export default ProductInfoPage;
