/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError, AxiosResponse } from 'axios';
import axios from '../configurations/setup';

// Interface for initiating payment response
interface InitiatePaymentResponse {
  status: string;
  message: string;
  data: {
    authorization_url: string;
    reference: string;
  };
}

// Interface for verifying payment response
export interface VerifyPaymentResponse {
  status: string;
  message: string;
  //   data: {
  //     reference: string;
  //     amount: number;
  //     currency: string;
  //     status: string;
  //     payment_date: string;
  //   };
  data?: {
    [key: string]: string;
  };
}

// Function to initiate payment
export const initiatePayment = async (
  amount: number,
  email: string,
  UserId: string,
  ProductId: string,
  redirectPage: string
): Promise<InitiatePaymentResponse | AxiosResponse<any, any> | undefined> => {
  try {
    const response = await axios.post(
      'api/payment/initiate',
      { amount, email, UserId, ProductId, redirectPage },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error initiating payment: ', error);
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};

// Function to verify payment
export const verifyPayment = async (
  reference: string
): Promise<VerifyPaymentResponse | AxiosResponse<any, any> | undefined> => {
  try {
    const response = await axios.get(`api/payment/verify/${reference}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error verifying payment:', error);
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};

export default {
  initiatePayment,
  verifyPayment,
};
