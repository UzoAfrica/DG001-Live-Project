//to handle API requests
import { AxiosError } from 'axios';
import axios from '../../src/axiosFolder/configurations/setup';

//const API_URL = '/http://localhost:5001/api/products'; //input api here

export const getProducts = async () => {
  try {
    const response = await axios.get('api/products');
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};