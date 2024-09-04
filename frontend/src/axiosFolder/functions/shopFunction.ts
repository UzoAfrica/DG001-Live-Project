import axios from 'axios';

// Initialize Axios with a base URL for your API
const customAxios = axios.create({
  baseURL: 'http://localhost:5001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Shop API Requests

// Create a new shop with video and image uploads
export const createShop = (formData: FormData) =>
  customAxios.post('/shops', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

// Update an existing shop by ID with video and image uploads
export const updateShop = (shopId: string, formData: FormData) =>
  customAxios.put(`/shops/${shopId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

// Delete a shop by ID
export const deleteShop = (shopId: string) =>
  customAxios.delete(`/shops/${shopId}`);

// Fetch a specific shop by ID
export const getShopById = (shopId: string) =>
  customAxios.get(`/shops/${shopId}`);

// Fetch all shops
export const getShops = () =>
  customAxios.get('/shops');

export default customAxios;
