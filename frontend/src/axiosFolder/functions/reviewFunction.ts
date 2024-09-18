/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from 'axios';
import axios from '../configurations/setup';

// Review API Requests

// Add review for a product
export const addReview = (productId: string, formData: any) => {
  try {
    const response = axios.post(
      `/api/products/${productId}/reviews`,
      formData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};
// Fetch review for a product
export const fetchReviews = (productId: string) => {
  try {
    const response = axios.get(`/api/products/${productId}/reviews`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};

export default axios;
