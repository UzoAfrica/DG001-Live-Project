import { FC, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PaystackButton } from 'react-paystack';
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

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  type: string;
  quantity?: number; // Optional since it will be added to cart later
}

const ProductInfoPage: FC = () => {
  const [mainProduct, setMainProduct] = useState<Product | null>(null);
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { productId } = useParams<{ productId: string }>();

  const userEmail = localStorage.getItem('userEmail') || 'user@example.com';
  const token = localStorage.getItem('token');

  const navigate = useNavigate();

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

  const handlePaymentSuccess = (reference: any) => {
    console.log('Payment successful:', reference);
    alert('Payment successful! Reference: ' + reference.reference);
    navigate('/shop'); // Redirect to shop page after payment
  };

  const handlePaymentClose = () => {
    alert('Please go back to complete your Payment! Payment window closed.');
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
              <PaystackButton
                email={userEmail}
                amount={mainProduct.price * 100} 
                publicKey="pk_test_365b14bccecb9ddf2893e6f2b9b74ade5940935f"
                text="Buy Now"
                onSuccess={handlePaymentSuccess}
                onClose={handlePaymentClose}
              />
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
