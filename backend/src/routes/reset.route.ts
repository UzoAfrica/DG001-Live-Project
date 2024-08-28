import express from 'express';
import {
  changePassword,
  resendOTP,
  verifyOTP,
} from '../controllers/reset.controller';
import verifyResetToken from '../middlewares/reset.middleware';

const resetRouter = express.Router();

// Send reset password OTP
resetRouter.post('/resend-otp', resendOTP);

// Verify reset password OTP
resetRouter.post('/verify-otp', verifyOTP);

// Confirm reset password
resetRouter.post('/change-password', verifyResetToken, changePassword);

export default resetRouter;
