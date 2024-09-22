import axios from '../configurations/setup';

    export const signupAdmin = async (body: any) => {
  try {
    const response = await axios.post('/api/admin/register', body, {
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

    export const loginAdmin = async (body: any) => {
    try {
      const response = await axios.post('/api/admin/login', body, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;
    } catch (error: any) {
      return error.response;
    }
  };
  