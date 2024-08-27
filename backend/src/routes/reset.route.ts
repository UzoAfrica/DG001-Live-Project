import express from 'express';
import {
  changePassword,
  generateResetToken,
} from '../controllers/reset.controller';

const resetRouter = express.Router();

// Send reset password URL
resetRouter.post('/reset-password', generateResetToken);

// Confirm reset password
resetRouter.post('/confirm-password', changePassword);

export default resetRouter;
