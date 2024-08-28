import express from 'express';
import {
  // changePassword,
  resendOTP,
  verifyOTP,
} from '../controllers/reset.controller';

const resetRouter = express.Router();

// Send reset password OTP
resetRouter.post('/resend-otp', resendOTP);

// Verify reset password OTP
resetRouter.post('/verify-otp', verifyOTP);

// Confirm reset password
// resetRouter.post('/change-password', changePassword);

export default resetRouter;
