import { FC, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
import { getProducts, getProductById } from '../../../axiosFolder/functions/productFunction';
import {
  initiatePayment,
  verifyPayment,
  VerifyPaymentResponse,
} from '../../../axiosFolder/functions/paymentFunction';
import { showErrorToast, showSuccessToast } from '../../utils/toastify';

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

  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts({
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.data && response.data.length > 0) {
          for (const product of response.data) {
            if (product.id === productId) {
              setMainProduct(product);
            }
          }
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

  // Check if paymentReference is present and verify payment
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
            showSuccessToast(response.message);
            localStorage.removeItem('paymentReference');
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

  // Function to handle when a similar product is clicked and swap it with the main product
  const handleSimilarProductClick = (clickedProduct: Product) => {
    if (mainProduct) {
      // Replace the main product with the clicked similar product
      const updatedSimilarProducts = similarProducts.map((product) =>
        product.id === clickedProduct.id ? mainProduct : product
      );

      // Update the state with the new main product and the swapped similar products list
      setMainProduct(clickedProduct);
      setSimilarProducts(updatedSimilarProducts);
    }
  };

  const handleAddToCart = (product: Product) => {
    try {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const existingProduct = cart.find(
        (item: Product) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      showSuccessToast('Product added to cart!');

      // Display prompt to user: proceed to checkout or continue shopping
      const userChoice = window.confirm(
        'Product added to cart! Would you like to go to the cart to checkout? Press OK to go to the cart or Cancel to continue shopping.'
      );

      // Redirect to cart if user confirms, otherwise continue shopping
      if (userChoice) {
        navigate('/cart');
      }

    } catch (error) {
      showErrorToast('Error adding product to cart');
      console.error('Error adding product to cart:', error);
    }
  };

  const handleAddToWishlist = (product: Product) => {
    try {
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      const existingProduct = wishlist.find(
        (item: Product) => item.id === product.id
      );

      if (existingProduct) {
        alert('Product is already in your wishlist!');
      } else {
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        showSuccessToast('Product added to wishlist!');
      }
    } catch (error) {
      showErrorToast('Error adding product to wishlist:');
      console.error('Error adding product to wishlist:', error);
    }
  };

  const handlePaymentInitiation = async () => {
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const userEmail = localStorage.getItem('userEmail');

      if (!mainProduct) {
        showErrorToast('Product information not available!');
        return;
      }

      if (!token || !userId || !userEmail) {
        showErrorToast('User not logged in!');
        return;
      }

      const redirectPage = `product/${productId}`;
      const response = await initiatePayment(
        mainProduct.price,
        userEmail,
        userId,
        mainProduct.id,
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
              <CartButton onClick={() => handleAddToCart(mainProduct)}>
                Add to Cart
              </CartButton>
            </ButtonContainer>

            <StyledPaystackButton onClick={handlePaymentInitiation}>
              Buy Now
            </StyledPaystackButton>
          </ProductDetails>

          {/* Similar Products Section */}
          <SimilarProductsSection>
            <h3>Similar Products</h3>
            <div>
              {similarProducts.map((similarProduct) => (
                <SimilarProductItem
                  key={similarProduct.id}
                  onClick={() => handleSimilarProductClick(similarProduct)}
                >
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
