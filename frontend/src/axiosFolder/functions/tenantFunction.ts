import { AxiosError } from 'axios';
import axios from '../configurations/setup';

// Pull all users for tenant DB
export const pullUsers = () => {
  try {
    const response = axios.get('/api/shop', {
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
