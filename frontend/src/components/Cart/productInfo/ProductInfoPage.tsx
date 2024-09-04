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
  SimilarProductImage 
} from '../productInfo/productInfoStyled';
import { getProductById, getProducts, addToCart, addToWishlist } from '../../../axiosFolder/functions/productFunction';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  type: string; 
}

const ProductInfoPage: FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!productId) return; 
        const response = await getProductById(productId); 
        setProduct(response.data); 
        fetchSimilarProducts(response.data.type); 
      } catch (error) {
        setError('Error fetching product details'); 
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false); 
      }
    };

    const fetchSimilarProducts = async (type: string) => {
      try {
        const response = await getProducts(); 
        const filteredProducts = response.data.filter((p: Product) => p.type === type); 
        setSimilarProducts(filteredProducts); 
      } catch (error) {
        console.error('Error fetching similar products:', error);
      }
    };

    fetchProduct(); 
  }, [productId]);

  const handleAddToWishlist = async () => {
    try {
      if (product) {
        const userId = 'yourUserId'; 
        await addToWishlist(userId, product.id); 
        alert('Product added to wishlist!'); 
      }
    } catch (error) {
      console.error('Error adding product to wishlist:', error); 
    }
  };

  const handleAddToCart = async () => {
    try {
      if (product) {
        const userId = 'yourUserId'; 
        await addToCart(userId, product.id); 
        alert('Product added to cart!');
      }
    } catch (error) {
      console.error('Error adding product to cart:', error); 
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      {product ? (
        <>
          <ProductImage src={product.imageUrl} alt={product.name} />
          <ProductDetails>
            <ProductName>{product.name}</ProductName>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>₦{product.price.toLocaleString()}</ProductPrice>
            <ButtonContainer>
              <WishlistButton onClick={handleAddToWishlist}>Add to Wishlist</WishlistButton>
              <CartButton onClick={handleAddToCart}>Add to Cart</CartButton>
            </ButtonContainer>
          </ProductDetails>
          
          <SimilarProductsSection>
            <h3>Similar Products</h3>
            <div>
              {similarProducts.map((similarProduct) => (
                <SimilarProductItem key={similarProduct.id}>
                  <SimilarProductImage src={similarProduct.imageUrl} alt={similarProduct.name} />
                  <p>{similarProduct.name}</p>
                  <p>₦{similarProduct.price.toLocaleString()}</p>
                </SimilarProductItem>
              ))}
            </div>
          </SimilarProductsSection>
        </>
      ) : (
        <p>Product not found.</p>
      )}
    </Container>
  );
};

export default ProductInfoPage;
