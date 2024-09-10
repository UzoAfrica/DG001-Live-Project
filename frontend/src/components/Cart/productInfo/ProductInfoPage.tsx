import { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  addToCart,
  addToWishlist,
} from '../../../axiosFolder/functions/productFunction';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  type: string;
}

const ProductInfoPage: FC = () => {
  const [mainProduct, setMainProduct] = useState<Product | null>(null);
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const userId = localStorage.getItem('userId');
  // const token = localStorage.getItem('token');
  const userEmail = localStorage.getItem('userEmail') || 'user@example.com';
  
  // Use navigate hook to redirect after payment
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       console.log('Fetching products');
  //       const response = await getProducts();
  //       setMainProduct(response.data[0]);
  //       setSimilarProducts(response.data.slice(1));
  //     } catch (error) {
  //       setError('Error fetching products');
  //       console.error('Error fetching products:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem('token'); 
      try {
        // Call the getProducts function with the headers config
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
  }, []);

  const handleAddToWishlist = async () => {
    try {
      if (mainProduct && userId) {
        await addToWishlist(userId, mainProduct.id);
        alert('Product added to wishlist!');
      } else {
        alert('User not logged in or product unavailable.');
      }
    } catch (error) {
      console.error('Error adding product to wishlist:', error);
    }
  };

  const handleAddToCart = async () => {
    try {
      if (mainProduct && userId) {
        await addToCart(userId, mainProduct.id);
        alert('Product added to cart!');
      } else {
        alert('User not logged in or product unavailable.');
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  const handlePaymentSuccess = (reference: any) => {
    console.log('Payment successful:', reference);
    alert('Payment successful! Reference: ' + reference.reference);
    navigate('/payment-success'); 
  };

  const handlePaymentClose = () => {
    alert('Payment window closed.');
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
              <WishlistButton onClick={handleAddToWishlist}>
                Add to Wishlist
              </WishlistButton>
              <CartButton onClick={handleAddToCart}>Add to Cart</CartButton>
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
