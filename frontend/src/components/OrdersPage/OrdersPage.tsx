 // src/components/OrdersPage.tsx
 import React, { useEffect, useState } from 'react';
 import { OrdersContainer, OrdersTable, TableHeader, TableRow, TableCell, SearchOrdersBox, SimilarProductsSection, Grid, ProductItem, ProductImageContainer, ProductImage, ProductDetails, ProductName, ProductDescription, ProductPrice } from './OrdersPage.styles';
 import Navbar from './Navbar';
 import { Order } from './types.ts';
 import { FaSearch } from 'react-icons/fa';
 import { getProducts } from '../../services/productService'; // Importing the service

 const OrdersPage: React.FC = () => {
 //   const [orders, setOrders] = useState<Order[]>([]);
 //   const [searchTerm, setSearchTerm] = useState('');
 //   const [selectedProduct, setSelectedProduct] = useState<Order | null>(null);

   // useEffect(() => {
   //   const fetchOrders = async () => {
   //     const fetchedOrders = await getProducts(); // Fetching orders
   //     if (Array.isArray(fetchedOrders)) {
   //       setOrders(fetchedOrders); // Set fetched orders to state
   //     }
   //   };
   //
   //   fetchOrders(); // Call the fetch function
   // }, []); // Empty dependency array to run once on mount
   //
   // const filteredOrders = orders.filter(order =>
   //   order.productName.toLowerCase().includes(searchTerm.toLowerCase())
   // );

   // const handleProductClick = (order: Order) => {
   //   setSelectedProduct(order);
   // };

   return (
     <>
       <Navbar />
       <OrdersContainer>
         {/*<SearchOrdersBox>*/}
         {/*  <FaSearch />*/}
         {/*  <input*/}
         {/*    type="text"*/}
         {/*    placeholder="Search orders..."*/}
         {/*    value={searchTerm}*/}
         {/*    onChange={(e) => setSearchTerm(e.target.value)}*/}
         {/*  />*/}
         {/*</SearchOrdersBox>*/}
         <OrdersTable>
           <thead>
           <tr>
             <TableHeader>Order ID</TableHeader>
             <TableHeader>Product Name</TableHeader>
             <TableHeader>Date Ordered</TableHeader>
             <TableHeader>Amount Paid</TableHeader>
             <TableHeader>Delivery Status</TableHeader>
           </tr>
           </thead>
           <tbody>
           {/*{filteredOrders.map((order) => (*/}
           {/*  <TableRow key={order.orderId} onClick={() => handleProductClick(order)}>*/}
           {/*    <TableCell>{order.orderId}</TableCell>*/}
           {/*    <TableCell>{order.productName}</TableCell>*/}
           {/*    <TableCell>{order.dateOrdered}</TableCell>*/}
           {/*    <TableCell>₦{order.amountPaid.toFixed(2)}</TableCell>*/}
           {/*    <TableCell>{order.deliveryStatus}</TableCell>*/}
           {/*  </TableRow>*/}
           {/*))}*/}
           </tbody>
         </OrdersTable>
         {/*{selectedProduct && (*/}
         {/*  <div>*/}
         {/*    <h2>{selectedProduct.productName}</h2>*/}
         {/*    <img src={selectedProduct.productImage} alt={selectedProduct.productName} />*/}
         {/*    <p>{selectedProduct.productDescription}</p>*/}
         {/*  </div>*/}
         {/*)}*/}
         <SimilarProductsSection>
           <h2>Similar Products</h2>
           <Grid>
             {/* Similar products section can remain as is */}
           </Grid>
         </SimilarProductsSection>
       </OrdersContainer>
     </>
   );
 };

 export default OrdersPage;








// import React, { useState } from 'react';
// import { OrdersContainer, OrdersTable, TableHeader, TableRow, TableCell, SearchOrdersBox, SimilarProductsSection, Grid, ProductItem, ProductImageContainer, ProductImage, ProductDetails, ProductName, ProductDescription, ProductPrice } from './OrdersPage.styles';
// import Navbar from './Navbar';
// import { Order } from './types.ts';
// import { FaSearch } from 'react-icons/fa';
//
// // noinspection NonAsciiCharacters
// const orders: Order[] = [
//   { dateOrdered: '2024-09-17', productName: 'Wireless Headphones', orderId: '#123456', amountPaid: 99.99, deliveryStatus: 'Shipped', productImage: 'headphones.jpg', productDescription: 'High-quality wireless headphones with noise cancellation.' },
//   // Add more orders as needed
// ];
//
// const similarProducts = [
//   { id: 1, name: 'Bluetooth Speaker', image: 'speaker.jpg', description: 'Portable Bluetooth speaker with excellent sound quality.', price: '49.99' },
//   // Add more similar products as needed
// ];
//
// const OrdersPage: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedProduct, setSelectedProduct] = useState<Order | null>(null);
//
//   const filteredOrders = orders.filter(order =>
//     order.productName.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//
//   const handleProductClick = (order: Order) => {
//     setSelectedProduct(order);
//   };
//
//   return (
//     <>
//       <Navbar />
//       <OrdersContainer>
//         <SearchOrdersBox>
//           <FaSearch />
//           <input
//             type="text"
//             placeholder="Search orders..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </SearchOrdersBox>
//         <OrdersTable>
//           <thead>
//           <tr>
//
//             <TableHeader>Order ID</TableHeader>
//             <TableHeader>Product Name</TableHeader>
//             <TableHeader>Date Ordered</TableHeader>
//             <TableHeader>Amount Paid</TableHeader>
//             <TableHeader>Delivery Status</TableHeader>
//           </tr>
//           </thead>
//           <tbody>
//           {filteredOrders.map((order) => (
//             <TableRow key={order.orderId} onClick={() => handleProductClick(order)}>
//               <TableCell>{order.orderId}</TableCell>
//               <TableCell>{order.productName}</TableCell>
//               <TableCell>{order.dateOrdered}</TableCell>
//               <TableCell>₦{order.amountPaid.toFixed(2)}</TableCell>
//               <TableCell>{order.deliveryStatus}</TableCell>
//             </TableRow>
//           ))}
//           </tbody>
//         </OrdersTable>
//         {selectedProduct && (
//           <div>
//             <h2>{selectedProduct.productName}</h2>
//             <img src={selectedProduct.productImage} alt={selectedProduct.productName} />
//             <p>{selectedProduct.productDescription}</p>
//           </div>
//         )}
//         <SimilarProductsSection>
//           <h2>Similar Products</h2>
//           <Grid>
//             {similarProducts.map((product) => (
//               <ProductItem key={product.id}>
//                 <ProductImageContainer>
//                   <ProductImage src={product.image} alt={product.name} />
//                 </ProductImageContainer>
//                 <ProductDetails>
//                   <ProductName>{product.name}</ProductName>
//                   <ProductDescription>{product.description}</ProductDescription>
//                   <ProductPrice>{product.price}</ProductPrice>
//                 </ProductDetails>
//               </ProductItem>
//             ))}
//           </Grid>
//         </SimilarProductsSection>
//       </OrdersContainer>
//     </>
//   );
// };
//
// export default OrdersPage;
