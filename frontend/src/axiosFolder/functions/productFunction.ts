/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from 'axios';
import axios from '../configurations/setup';

// Product API Requests

// Get all products (matching the getAllProducts endpoint in the product.route.ts)
export const getProducts = () => axios.get('/products');

// Get a specific product by ID
export const getProductById = (productId: string) =>
  axios.get(`/products/${productId}`);

// Get trending sales products with filters and pagination
export const getTrendingProducts = (filters: Record<string, any>) =>
  axios.get('/products/trending', { params: filters });

// Add a new product with video upload (uses FormData for file uploads)
export const addProduct = (formData: any) => {
  try {
    const response = axios.post('/api/products/add-product', formData, {
      headers: {
        // 'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};

// Update an existing product by ID
export const updateProduct = (productId: string, data: Record<string, any>) =>
  axios.put(`/products/${productId}`, data);

// Delete a product by ID
export const deleteProduct = (productId: string) =>
  axios.delete(`/products/${productId}`);

// Wishlist API Requests

// Get the wishlist of a user
export const getWishlist = (userId: string) =>
  axios.get(`/user/${userId}/wishlist`);

// Add a product to the wishlist
export const addToWishlist = (userId: string, productId: string) =>
  axios.post(`/user/${userId}/wishlist/${productId}`);

// Remove a product from the wishlist
export const removeFromWishlist = (userId: string, productId: string) =>
  axios.delete(`/user/${userId}/wishlist/${productId}`);

// Cart API Requests

// Get the cart of a user
export const getCart = (userId: string) => axios.get(`/user/${userId}/cart`);

// Add a product to the cart
export const addToCart = (userId: string, productId: string) =>
  axios.post(`/user/${userId}/cart/${productId}`);

// Remove a product from the cart
export const removeFromCart = (userId: string, productId: string) =>
  axios.delete(`/user/${userId}/cart/${productId}`);

// Add a review for a product
export const addReview = (productId: string, reviewData: Record<string, any>) =>
  axios.post(`/products/${productId}/reviews`, reviewData);

export default axios;
