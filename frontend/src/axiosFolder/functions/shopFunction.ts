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
export const updateShop = (shopId: string, formData: any) => {
  try {
    const response = axios.put(`/api/shop/update-shop/${shopId}`, formData, {
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

// Delete a shop by ID
export const deleteShop = (shopId: string) =>
  axios.delete(`/api/shop/${shopId}`);

// Fetch a specific shop by ID
export const getShopById = (shopId: string) => axios.get(`/api/shop/${shopId}`);

// Fetch all shops
export const getShops = () => axios.get('/api/shop');

// Fetch My shops
export const getMyShops = (userId: string) => axios.get(`/api/shop/userShops/${userId}`);

export default axios;
