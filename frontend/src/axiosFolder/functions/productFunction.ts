// import axios from 'axios';

// const customAxios = axios.create({
//   baseURL: 'http://localhost:5001/api',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // API Requests
// export const getProducts = () => customAxios.get('/products');
// export const getWishlist = (userId: string) =>
//   customAxios.get(`/user/${userId}/wishlist`);
// export const addToWishlist = (userId: string, productId: string) =>
//   customAxios.post(`/user/${userId}/wishlist/${productId}`);
// export const removeFromWishlist = (userId: string, productId: string) =>
//   customAxios.delete(`/user/${userId}/wishlist/${productId}`);

// export const getCart = (userId: string) =>
//   customAxios.get(`/user/${userId}/cart`);
// export const addToCart = (userId: string, productId: string) =>
//   customAxios.post(`/user/${userId}/cart/${productId}`);
// export const removeFromCart = (userId: string, productId: string) =>
//   customAxios.delete(`/user/${userId}/cart/${productId}`);

// export default customAxios;


import axios from 'axios';

// Initialize Axios with a base URL for your API
const customAxios = axios.create({
  baseURL: 'http://localhost:5001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Product API Requests

// Get all products
export const getProducts = () => customAxios.get('/products');

// Get a specific product by ID
export const getProductById = (productId: string) =>
  customAxios.get(`/products/product/${productId}`);

// Get trending sales products with filters and pagination
export const getTrendingProducts = (filters: Record<string, any>) =>
  customAxios.get('/products/trending', { params: filters });

// Add a new product with video upload (uses FormData for file uploads)
export const addProduct = (formData: FormData) =>
  customAxios.post('/products/add', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

// Update an existing product by ID
export const updateProduct = (productId: string, data: Record<string, any>) =>
  customAxios.put(`/products/${productId}`, data);

// Delete a product by ID
export const deleteProduct = (productId: string) =>
  customAxios.delete(`/products/${productId}`);

// Wishlist API Requests

// Get the wishlist of a user
export const getWishlist = (userId: string) =>
  customAxios.get(`/user/${userId}/wishlist`);

// Add a product to the wishlist
export const addToWishlist = (userId: string, productId: string) =>
  customAxios.post(`/user/${userId}/wishlist/${productId}`);

// Remove a product from the wishlist
export const removeFromWishlist = (userId: string, productId: string) =>
  customAxios.delete(`/user/${userId}/wishlist/${productId}`);

// Cart API Requests

// Get the cart of a user
export const getCart = (userId: string) =>
  customAxios.get(`/user/${userId}/cart`);

// Add a product to the cart
export const addToCart = (userId: string, productId: string) =>
  customAxios.post(`/user/${userId}/cart/${productId}`);

// Remove a product from the cart
export const removeFromCart = (userId: string, productId: string) =>
  customAxios.delete(`/user/${userId}/cart/${productId}`);

// Add a review for a product
export const addReview = (productId: string, reviewData: Record<string, any>) =>
  customAxios.post(`/products/${productId}/reviews`, reviewData);

export default customAxios;
