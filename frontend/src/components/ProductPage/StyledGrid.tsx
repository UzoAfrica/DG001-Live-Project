// // src/components/ProductPage/StyledGrid.tsx
import styled from 'styled-components';
import React, { useState } from 'react';
import { Product } from './ProductList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

interface StyledGridProps {
  products: Product[];
  onAddToWishlist: (productId: number, product: Product) => void;
  onAddToCart: (productId: number, product: Product) => void;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 5px;
`;

const ProductItem = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  &:hover {
    transform: scale(1.05);
    background-color: antiquewhite;  
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: scale-down;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2px;
  padding: 2px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #ffffff;
  width: 100%;
`;

const ProductName = styled.h2`
  font-family: 'inter',sans-serif;
  font-size: 16px;
`;

const ProductDescription = styled.p`
  font-family: 'inter',sans-serif;
  font-size: 14px;
  color: grey;
`;

const ProductPrice = styled.p`
  font-family: 'inter',sans-serif;
  font-size: 16px;
  color: green;
    font-weight: bold;
`;

const ActionButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;

const ActionButton = styled.button<{ active: boolean }>`
  margin: 5px;
  padding: 5px;
  cursor: pointer;
  background: none;
  border: none;
  color: ${(props) => (props.active ? '#e04f16' : 'Red')};
  font-size: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: darkorange;
  }
`;

const StyledGrid: React.FC<StyledGridProps> = ({ products, onAddToWishlist, onAddToCart }) => {
  const [activeWishlist, setActiveWishlist] = useState<{ [key: number]: boolean }>({});
  const [activeCart, setActiveCart] = useState<{ [key: number]: boolean }>({});

  const handleAddToWishlist = (product: Product) => {
    if (activeWishlist[product.id]) {
      const confirmRemove = window.confirm("Remove this product from your wishlist?");
      if (confirmRemove) {
        setActiveWishlist((prev) => ({ ...prev, [product.id]: false }));
        alert('Product removed from wishlist!');
      }
    } else {
      onAddToWishlist(product);
      setActiveWishlist((prev) => ({ ...prev, [product.id]: true }));
    }
  };

  const handleAddToCart = (product: Product) => {
    if (activeCart[product.id]) {
      const confirmRemove = window.confirm("Remove this product from your cart?");
      if (confirmRemove) {
        setActiveCart((prev) => ({ ...prev, [product.id]: false }));
        alert('Product removed from cart!');
      }
    } else {
      onAddToCart(product);
      setActiveCart((prev) => ({ ...prev, [product.id]: true }));
    }
  };

  return (
    <Grid>
      {products.map((product) => (
        <ProductItem key={product.id}>
          <ProductImage src={product.imageUrl} alt={product.name} />
          <ProductDetails>
            <ProductName>{product.name}</ProductName>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>₦{product.price.toLocaleString()}</ProductPrice>
            <ActionButtonContainer>
              <ActionButton
                active={activeWishlist[product.id] || false}
                onClick={() => handleAddToWishlist(product)}
              >
                <FontAwesomeIcon icon={solidHeart} />
              </ActionButton>
              <ActionButton
                active={activeCart[product.id] || false}
                onClick={() => handleAddToCart(product)}
              >
                <FontAwesomeIcon icon={faShoppingCart} />
              </ActionButton>
            </ActionButtonContainer>
          </ProductDetails>
        </ProductItem>
      ))}
    </Grid>
  );
};

export default StyledGrid;




// import styled from 'styled-components';
// import React, { useState } from 'react';
// import { Product } from './ProductList';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
//
// interface StyledGridProps {
//   products: Product[];
//   onAddToWishlist: (product: Product) => void;
//   onAddToCart: (product: Product) => void;
// }
//
// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//   gap: 20px;
//   padding: 5px;
// `;
//
// const ProductItem = styled.div`
//   background-color: #f5f5f5;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   transition: transform 0.2s ease-in-out;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//
//   &:hover {
//     transform: scale(1.05);
//     background-color: antiquewhite;
//   }
// `;
//
// const ProductImage = styled.img`
//   width: 100%;
//   height: 200px;
//   object-fit: scale-down;
//   transition: transform 0.3s ease-in-out;
//
//   &:hover {
//     transform: scale(1.1);
//   }
// `;
//
// const ProductDetails = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 2px;
//   padding: 2px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   background-color: #ffffff;
//   width: 100%;
// `;
//
// const ProductName = styled.h2`
//   font-family: 'inter';
//   font-size: 16px;
// `;
//
// const ProductDescription = styled.p`
//   font-family: 'inter';
//   font-size: 14px;
//   color: grey;
// `;
//
// const ProductPrice = styled.p`
//   font-family: 'inter';
//   font-size: 16px;
//   color: green;
// `;
//
// const ActionButtonContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 5px;
// `;
//
// const ActionButton = styled.button<{ active: boolean }>`
//   margin: 5px;
//   padding: 5px;
//   cursor: pointer;
//   background: none;
//   border: none;
//   color: ${(props) => (props.active ? '#e04f16' : 'transparent')};
//   font-size: 20px;
//   transition: color 0.3s ease;
//
//   &:hover {
//     color: darkorange;
//   }
// `;
//
// const StyledGrid: React.FC<StyledGridProps> = ({ products, onAddToWishlist, onAddToCart }) => {
//   const [activeWishlist, setActiveWishlist] = useState<{ [key: number]: boolean }>({});
//   const [activeCart, setActiveCart] = useState<{ [key: number]: boolean }>({});
//
//   const handleAddToWishlist = (product: Product) => {
//     onAddToWishlist(product);
//     setActiveWishlist((prev) => ({ ...prev, [product.id]: true }));
//   };
//
//   const handleAddToCart = (product: Product) => {
//     onAddToCart(product);
//     setActiveCart((prev) => ({ ...prev, [product.id]: true }));
//   };
//
//   return (
//     <Grid>
//       {products.map((product) => (
//         <ProductItem key={product.id}>
//           <ProductImage src={product.imageUrl} alt={product.name} />
//           <ProductDetails>
//             <ProductName>{product.name}</ProductName>
//             <ProductDescription>{product.description}</ProductDescription>
//             <ProductPrice>₦{product.price.toLocaleString()}</ProductPrice>
//             <ActionButtonContainer>
//               <ActionButton
//                 active={activeWishlist[product.id] || false}
//                 onClick={() => handleAddToWishlist(product)}
//               >
//                 <FontAwesomeIcon icon={solidHeart} />
//               </ActionButton>
//               <ActionButton
//                 active={activeCart[product.id] || false}
//                 onClick={() => handleAddToCart(product)}
//               >
//                 <FontAwesomeIcon icon={faShoppingCart} />
//               </ActionButton>
//             </ActionButtonContainer>
//           </ProductDetails>
//         </ProductItem>
//       ))}
//     </Grid>
//   );
// };
//
// export default StyledGrid;