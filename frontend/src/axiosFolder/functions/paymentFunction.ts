import axios from '../configurations/setup';
import { AxiosResponse } from 'axios';

// Interface for initiating payment response
interface InitiatePaymentResponse {
  authorization_url: string;
  reference: string;
}

// Interface for verifying payment response
interface VerifyPaymentResponse {
  status: string;
  message: string;
  data: {
    reference: string;
    amount: number;
    currency: string;
    status: string;
    payment_date: string;
  };
}

// Function to initiate payment
export const initiatePayment = async (
  amount: number,
  email: string,
  token: string
): Promise<AxiosResponse<InitiatePaymentResponse>> => {
    console.log('Sending payment data:', initiatePayment); 
  try {
    const response = await axios.post(
      'api/payment/initiate',
      { amount, email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error('Error initiating payment:', error);
    throw error;
  }
};

// Function to verify payment
export const verifyPayment = async (
  reference: string,
  token: string
): Promise<AxiosResponse<VerifyPaymentResponse>> => {
  try {
    const response = await axios.get(`api/payment/verify/${reference}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error('Error verifying payment:', error);
    throw error;
  }
};

export default {
    initiatePayment,
    verifyPayment,
};