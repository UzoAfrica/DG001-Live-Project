import React, { FC, useState, useEffect } from 'react';
import {
  CartBackground,
  CartContainer,
  Title,
  CartHeader,
  EmptyCartMessage,
  CartTable,
  CartItem,
  ItemImage,
  ItemTitle,
  ItemPrice,
  ItemQuantity,
  QuantityButton,
  Quantity,
  RemoveButton,
  CartFooter,
  TotalItems,
  TotalAmount,
  FooterButtons,
  ClearCartButton,
  CheckoutButton,
} from './CartStyled';
import { getCart, addToCart, removeFromCart } from '../../axiosFolder/functions/productFunction'; // Ensure addToCart is imported and used

interface CartProps {
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Item {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart: FC<CartProps> = ({ setOpenCart }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const userId = 'yourUserId'; // Replace with actual user ID
        const response = await getCart(userId);
        setItems(response.data.items || []);
        setCartTotal(response.data.cartTotal || 0);
        setTotalItems(response.data.totalItems || 0);
      } catch (err) {
        setError('Error fetching cart data');
        console.error('Error fetching cart data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const handleAddItem = async (productId: string) => {
    try {
      const userId = 'yourUserId'; // Replace with actual user ID
      await addToCart(userId, productId); // Call addToCart to add item
      // Optionally, you could refetch cart data or update the state to reflect the addition
      const response = await getCart(userId);
      setItems(response.data.items || []);
      setCartTotal(response.data.cartTotal || 0);
      setTotalItems(response.data.totalItems || 0);
    } catch (err) {
      console.error('Error adding item to cart:', err);
    }
  };

  const handleRemoveItem = async (itemId: string) => {
    try {
      const userId = 'yourUserId'; // Replace with actual user ID
      await removeFromCart(userId, itemId);
      setItems((prevItems) => prevItems.filter(item => item.id !== itemId));
      // Optionally, update totalItems and cartTotal
    } catch (err) {
      console.error('Error removing item from cart:', err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Title>Cart</Title>
      <CartBackground>
        <CartContainer>
          <CartHeader>
            <i
              style={{ cursor: 'pointer' }}
              className="fa fa-times"
              aria-hidden="true"
              onClick={() => setOpenCart(false)}
            ></i>
          </CartHeader>

          {items.length === 0 ? (
            <EmptyCartMessage>Your shopping cart is empty</EmptyCartMessage>
          ) : (
            <>
              <CartTable>
                <tbody>
                  {items.map((item, index) => (
                    <CartItem key={index}>
                      <td>
                        <ItemImage src={item.image} alt={item.title} />
                      </td>
                      <ItemTitle>{item.title}</ItemTitle>
                      <ItemPrice>{item.price} €</ItemPrice>
                      <ItemQuantity>
                        <QuantityButton
                          onClick={() => handleAddItem(item.id)} // Use addToCart here
                        >
                          &minus;
                        </QuantityButton>
                        <Quantity>{item.quantity || 0}</Quantity>
                        <QuantityButton
                          onClick={() => handleAddItem(item.id)} // Use addToCart here
                        >
                          &#43;
                        </QuantityButton>
                      </ItemQuantity>
                      <td>
                        <RemoveButton onClick={() => handleRemoveItem(item.id)}>
                          <i className="fa fa-trash" aria-hidden="true" />
                        </RemoveButton>
                      </td>
                    </CartItem>
                  ))}
                </tbody>
              </CartTable>

              <CartFooter>
                <TotalItems>Number of item(s): {totalItems}</TotalItems>
                <TotalAmount>Total: {cartTotal} €</TotalAmount>
                <FooterButtons>
                  <ClearCartButton onClick={() => { /* Clear cart logic here */ }}>
                    Empty Cart
                  </ClearCartButton>
                  <CheckoutButton type="submit">Checkout</CheckoutButton>
                </FooterButtons>
              </CartFooter>
            </>
          )}
        </CartContainer>
      </CartBackground>
    </>
  );
};

export default Cart;




// import React, { FC, useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   CartBackground,
//   CartContainer,
//   Title,
//   CartHeader,
//   EmptyCartMessage,
//   CartTable,
//   CartItem,
//   ItemImage,
//   ItemTitle,
//   ItemPrice,
//   ItemQuantity,
//   QuantityButton,
//   Quantity,
//   RemoveButton,
//   CartFooter,
//   TotalItems,
//   TotalAmount,
//   FooterButtons,
//   ClearCartButton,
//   CheckoutButton,
// } from './CartStyled';

// interface CartProps {
//   setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
// }

// interface Item {
//   id: string;
//   title: string;
//   price: number;
//   quantity: number;
//   image: string;
// }

// const Cart: FC<CartProps> = ({ setOpenCart }) => {
//   const [items, setItems] = useState<Item[]>([]);
//   const [cartTotal, setCartTotal] = useState<number>(0);
//   const [totalItems, setTotalItems] = useState<number>(0);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const response = await axios.get('/api/cart'); // Ensure backend endpoint is correct
//         setItems(response.data.items || []);
//         setCartTotal(response.data.cartTotal || 0);
//         setTotalItems(response.data.totalItems || 0);
//       } catch (err) {
//         setError('Error fetching cart data');
//         console.error('Error fetching cart data:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCart();
//   }, []);

//   const handleRemoveItem = async (itemId: string) => {
//     try {
//       await axios.delete(`/api/cart/${itemId}`); // Adjust endpoint as needed
//       setItems(items.filter(item => item.id !== itemId));
//     } catch (err) {
//       console.error('Error removing item:', err);
//       setError('Error removing item');
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <>
//       <Title>Cart</Title>
//       <CartBackground>
//         <CartContainer>
//           <CartHeader>
//             <i
//               style={{ cursor: 'pointer' }}
//               className="fa fa-times"
//               aria-hidden="true"
//               onClick={() => setOpenCart(false)}
//             ></i>
//           </CartHeader>

//           {items.length === 0 ? (
//             <EmptyCartMessage>Your shopping cart is empty</EmptyCartMessage>
//           ) : (
//             <>
//               <CartTable>
//                 <tbody>
//                   {items.map((item, index) => (
//                     <CartItem key={index}>
//                       <td>
//                         <ItemImage src={item.image} alt={item.title} />
//                       </td>
//                       <ItemTitle>{item.title}</ItemTitle>
//                       <ItemPrice>{item.price} €</ItemPrice>
//                       <ItemQuantity>
//                         <QuantityButton
//                           onClick={() => {
//                             /* Decrease item quantity logic here */
//                           }}
//                         >
//                           &minus;
//                         </QuantityButton>
//                         <Quantity>{item.quantity || 0}</Quantity>
//                         <QuantityButton
//                           onClick={() => {
//                             /* Increase item quantity logic here */
//                           }}
//                         >
//                           &#43;
//                         </QuantityButton>
//                       </ItemQuantity>
//                       <td>
//                         <RemoveButton
//                           onClick={() => handleRemoveItem(item.id)}
//                         >
//                           <i className="fa fa-trash" aria-hidden="true" />
//                         </RemoveButton>
//                       </td>
//                     </CartItem>
//                   ))}
//                 </tbody>
//               </CartTable>

//               <CartFooter>
//                 <TotalItems>Number of item(s): {totalItems}</TotalItems>
//                 <TotalAmount>Total: {cartTotal} €</TotalAmount>
//                 <FooterButtons>
//                   <ClearCartButton
//                     onClick={() => {
//                       /* Empty cart logic here */
//                     }}
//                   >
//                     Empty Cart
//                   </ClearCartButton>
//                   <CheckoutButton type="submit">Checkout</CheckoutButton>
//                 </FooterButtons>
//               </CartFooter>
//             </>
//           )}
//         </CartContainer>
//       </CartBackground>
//     </>
//   );
// };

// export default Cart;
