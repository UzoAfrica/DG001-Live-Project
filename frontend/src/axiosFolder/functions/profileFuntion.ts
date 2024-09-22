/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from 'axios';
import axios from '../configurations/setup';

// Review API Requests

// Add review for a product
export const updateProfile = (formData: any, UserId: any) => {
  try {
    const response = axios.put(`/profile/user/${UserId}`, formData, {
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

export default axios;
