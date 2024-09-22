import { FC, useState, useEffect, useContext, FormEvent } from 'react';
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
  Grid,
  GridProductDescription,
  GridProductImage,
  GridProductName,
  GridProductPrice,
  ProductItem,
} from '../productInfo/productInfoStyled';
import {
  getProducts,
  getProductById,
} from '../../../axiosFolder/functions/productFunction';
import {
  createOrder,
  initiatePayment,
  verifyPayment,
  VerifyPaymentResponse,
} from '../../../axiosFolder/functions/paymentFunction';
import { showErrorToast, showSuccessToast } from '../../utils/toastify';
import { CartContext, CartContextProps, CartItem } from '../CartProvider';
import { AxiosError } from 'axios';
import {
  addReview,
  fetchReviews,
} from '../../../axiosFolder/functions/reviewFunction';
import Reviews from './Reviews';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  type: string;
  quantity: number;
  [key: string]: string | number;
}
export interface ReviewForm {
  comment: string;
  rating: number | string;
}
export interface Review {
  rating: number;
  comment: string;
  username: string;
  shopName: string;
  date: string;
}

const ProductInfoPage: FC = () => {
  const [mainProduct, setMainProduct] = useState<Product | null>(null);
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isReviewFormOpen, setIsReviewFormOpen] = useState<boolean>(false);
  const [reviewForm, setReviewForm] = useState<ReviewForm>({
    comment: '',
    rating: '',
  });
  const [reviews, setReviews] = useState<Review[] | []>([]);
  const { productId } = useParams<{ productId: string }>();
  const { addItem, updateItemQuantity, items } = useContext(
    CartContext
  ) as CartContextProps;

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
            let cart = [];
            let productDetails = {
              id: productId,
              price: localStorage.getItem('price'),
              name: localStorage.getItem('productName'),
              quantity: 1,
            };
            const userId = localStorage.getItem('userId')!;
            cart.push(productDetails);

            const createOrderResponse = await createOrder(
              JSON.stringify(cart),
              userId
            );
            console.log(createOrderResponse);

            showSuccessToast(response.message);
            navigate(`/orders/${userId}`);
            return localStorage.removeItem('paymentReference');
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

  // Fetch all reviews on page render
  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await fetchReviews(productId!);
        setReviews([...response?.data.data]);
      } catch (error) {
        if (error instanceof AxiosError) {
          showErrorToast(error.response?.data.message);
        }
      }
    };
    getReviews();
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
      // const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      // const existingProduct = cart.find(
      //   (item: Product) => item.id === product.id
      // );

      const existingItem = items.find((item) => item.id === product.id);

      if (existingItem) {
        const newQuantity = existingItem.quantity + 1;
        updateItemQuantity(product.id, newQuantity);
      } else {
        const cartItem: CartItem = {
          ...product,
        };
        addItem(cartItem);
      }
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

      localStorage.setItem('price', String(mainProduct?.price));
      localStorage.setItem('productName', mainProduct?.name as string);

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
      if (error instanceof AxiosError) {
        showErrorToast(error.message);
      }
    }
  };

  const handleCommentInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setReviewForm({
      ...reviewForm,
      [name]: value,
    });
  };
  const handleRatingInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setReviewForm({
      ...reviewForm,
      [name]: value,
    });
  };

  const handleReviewSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Send request to add review
    try {
      const response = await addReview(productId!, reviewForm);
      const { comment, rating, createdAt, username, shopName } =
        response?.data.data;
      setReviews((previousState) => {
        return [
          ...previousState,
          {
            rating,
            comment,
            username,
            shopName,
            date: createdAt,
          },
        ];
      });
      setReviewForm({
        comment: '',
        rating: '',
      });
      showSuccessToast(response!.data.message);
    } catch (error) {
      if (error instanceof AxiosError) {
        showErrorToast(error.response?.data.message);
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
            <ProductPrice>
              N{new Intl.NumberFormat('en-NG').format(mainProduct.price)}
            </ProductPrice>
            <ButtonContainer>
              <WishlistButton onClick={() => handleAddToWishlist(mainProduct)}>
                Add to Wishlist
              </WishlistButton>
              <CartButton onClick={() => handleAddToCart(mainProduct)}>
                Add to Cart
              </CartButton>
              <StyledPaystackButton onClick={handlePaymentInitiation}>
                Buy Now
              </StyledPaystackButton>
            </ButtonContainer>
          </ProductDetails>

          {/* Reviews section */}
          <Reviews
            isReviewFormOpen={isReviewFormOpen}
            handleReviewSubmit={handleReviewSubmit}
            handleCommentInputChange={handleCommentInputChange}
            handleRatingInputChange={handleRatingInputChange}
            setIsReviewFormOpen={setIsReviewFormOpen}
            reviews={reviews}
            reviewForm={reviewForm}
          ></Reviews>

          {/* Similar Products Section */}
          {/* <SimilarProductsSection>
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
          </SimilarProductsSection> */}

          {/* Chika's style for similar products */}
          <SimilarProductsSection>
            <h3>Similar Products</h3>
            <Grid>
              {similarProducts.map((similarProduct) => (
                <ProductItem
                  key={similarProduct.id}
                  onClick={() => handleSimilarProductClick(similarProduct)}
                >
                  <GridProductImage
                    src={similarProduct.imageUrl}
                    alt={similarProduct.name}
                  />
                  <GridProductName>{similarProduct.name}</GridProductName>
                  <GridProductDescription>
                    {similarProduct.description.length > 20
                      ? similarProduct.description.slice(0, 20) + '...'
                      : similarProduct.description}
                  </GridProductDescription>
                  <GridProductPrice>
                    N
                    {new Intl.NumberFormat('en-NG').format(
                      similarProduct.price
                    )}
                  </GridProductPrice>
                </ProductItem>
              ))}
            </Grid>
          </SimilarProductsSection>
        </>
      ) : (
        <p>No products found.</p>
      )}
    </Container>
  );
};

export default ProductInfoPage;
