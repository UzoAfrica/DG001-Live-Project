//to handle API requests
import axios from 'axios';

const API_URL = '/http://localhost:5001/api/products'; //input api here

export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Error fetching products');
  }
};