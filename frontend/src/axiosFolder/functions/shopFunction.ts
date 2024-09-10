/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from 'axios';
import axios from '../configurations/setup';

// Shop API Requests

// Create a new shop with video and image uploads
export const createShop = (formData: any) => {
  try {
    const response = axios.post('/api/shop/create-shop', formData, {
      headers: {
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

// Update an existing shop by ID with video and image uploads
export const updateShop = (shopId: string, formData: FormData) =>
  axios.put(`/shops/${shopId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

// Delete a shop by ID
export const deleteShop = (shopId: string) => axios.delete(`/shops/${shopId}`);

// Fetch a specific shop by ID
export const getShopById = (shopId: string) => axios.get(`/shops/${shopId}`);

// Fetch all shops
export const getShops = () => axios.get('/shops');

export default axios;
