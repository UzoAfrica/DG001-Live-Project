/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from '../configurations/setup';

export const signup = async (body: any) => {
  try {
    const response = await axios.post('/api/signup', body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const otpVerificationFunction = async (otp: any) => {
  try {
    const response = await axios.post('/api/reset/verify-otp', otp, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const otpResendFunction = async (email: any) => {
  try {
    const response = await axios.post('/api/reset/resend-otp', email, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const loginFunction = async (body: any) => {
  try {
    const response = await axios.post('/api/login', body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};

//localhost:5001/api/signup
