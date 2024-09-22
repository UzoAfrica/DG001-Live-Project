import express from 'express';
import {
  changePassword,
  resendOTP,
  verifyOTP,
} from '../controllers/reset.controller';
import rateLimitRoute from '../middlewares/rate-limit.middleware';
import verifyResetToken from '../middlewares/reset.middleware';

const resetRouter = express.Router();

// Send reset password OTP
resetRouter.post('/resend-otp', rateLimitRoute, resendOTP);

// Verify reset password OTP
resetRouter.post('/verify-otp', rateLimitRoute, verifyOTP);

// Confirm reset password
resetRouter.post('/change-password', verifyResetToken, changePassword);

export default resetRouter;
