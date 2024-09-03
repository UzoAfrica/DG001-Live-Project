import axios from 'axios';

const customAxios = axios.create({
  baseURL: 'http://localhost:5001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// API Requests
export const getProducts = () => customAxios.get('/products');
export const getWishlist = (userId: string) =>
  customAxios.get(`/user/${userId}/wishlist`);
export const addToWishlist = (userId: string, productId: string) =>
  customAxios.post(`/user/${userId}/wishlist/${productId}`);
export const removeFromWishlist = (userId: string, productId: string) =>
  customAxios.delete(`/user/${userId}/wishlist/${productId}`);

export const getCart = (userId: string) =>
  customAxios.get(`/user/${userId}/cart`);
export const addToCart = (userId: string, productId: string) =>
  customAxios.post(`/user/${userId}/cart/${productId}`);
export const removeFromCart = (userId: string, productId: string) =>
  customAxios.delete(`/user/${userId}/cart/${productId}`);

export default customAxios;
