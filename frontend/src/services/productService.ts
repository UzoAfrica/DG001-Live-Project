//to handle API requests
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from 'axios';
import axios from '../../src/axiosFolder/configurations/setup';

// import axios from 'axios';

// const API_URL = '/" "/products'; //input api here

export const getProducts = async () => {
  try {
    const response = await axios.get('api/products');
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }

    throw new Error(error.response.data.error || 'Error fetching products');
  }
};
