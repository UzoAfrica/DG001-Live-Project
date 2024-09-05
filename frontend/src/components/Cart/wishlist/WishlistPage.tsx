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
import { getWishlist } from '../../../axiosFolder/functions/productFunction';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const Wishlist: React.FC = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]); // State for storing wishlist items
  const [loading, setLoading] = useState<boolean>(true); // State for loading status
  const [error, setError] = useState<string | null>(null); // State for error message

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        // Assume you have a way to get userId (e.g., from context or props)
        const userId = 'yourUserId'; // Replace with actual user ID
        const response = await getWishlist(userId); // Fetch wishlist from backend
        setWishlist(response.data); // Update state with fetched data
      } catch (error) {
        setError('Error fetching wishlist'); // Set error message
        console.error('Error fetching wishlist:', error); // Log any error if fetching fails
      } finally {
        setLoading(false); // Set loading to false once fetching is done
      }
    };

    fetchWishlist(); // Fetch wishlist data when component mounts
  }, []);

  const handleViewMore = (productId: string) => {
    // Navigate to product info page or handle action
    console.log('View more clicked for product:', productId);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

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
              </ButtonContainer>
            </WishlistItem>
          ))}
        </WishlistContainer>
      </Container>
    </>
  );
};

export default Wishlist;



// import React, { useState, useEffect } from 'react';
// import {
//   Container,
//   Title,
//   WishlistContainer,
//   WishlistItem,
//   ProductImage,
//   ProductInfo,
//   ProductName,
//   ProductDescription,
//   ProductPrice,
//   ButtonContainer,
//   ViewMoreButton,
// } from './StyledWishlist';
// import api from '../../utils/Api'; // Ensure this is your Axios instance or API utility file

// interface Product {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   imageUrl: string;
// }

// const Wishlist: React.FC = () => {
//   const [wishlist, setWishlist] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchWishlist = async () => {
//       try {
//         const response = await api.get('/user/wishlist'); // Ensure this matches your backend endpoint
//         setWishlist(response.data);
//       } catch (error) {
//         console.error('Error fetching wishlist:', error);
//       }
//     };

//     fetchWishlist();
//   }, []);

//   const handleRemoveFromWishlist = async (productId: string) => {
//     try {
//       await api.delete(`/user/wishlist/${productId}`); // Adjust endpoint based on your backend
//       setWishlist(wishlist.filter(product => product.id !== productId));
//     } catch (err) {
//       console.error('Error removing product from wishlist:', err);
//     }
//   };

//   const handleViewMore = (productId: string) => {
//     // Navigate to product info page or handle action
//     console.log('View more clicked for product:', productId);
//   };

//   return (
//     <>
//       <Title>Wishlist</Title>
//       <Container>
//         <WishlistContainer>
//           {wishlist.map((product) => (
//             <WishlistItem key={product.id}>
//               <ProductImage src={product.imageUrl} alt={product.name} />
//               <ProductInfo>
//                 <ProductName>{product.name}</ProductName>
//                 <ProductDescription>
//                   {product.description}
//                 </ProductDescription>
//                 <ProductPrice>
//                   ₦{product.price.toLocaleString()}{' '}
//                   <span style={{ color: 'green' }}>Negotiable</span>
//                 </ProductPrice>
//               </ProductInfo>
//               <ButtonContainer>
//                 <ViewMoreButton onClick={() => handleViewMore(product.id)}>
//                   View More
//                 </ViewMoreButton>
//                 <button onClick={() => handleRemoveFromWishlist(product.id)}>
//                   Remove
//                 </button>
//               </ButtonContainer>
//             </WishlistItem>
//           ))}
//         </WishlistContainer>
//       </Container>
//     </>
//   );
// };

// export default Wishlist;
