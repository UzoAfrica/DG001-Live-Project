import express from 'express';
import {
  initiatePayment,
  verifyPayment,
} from '../controllers/payment.controller';
import { authenticateToken } from '../middlewares/auth.middleware';

const paymentRouter = express.Router();

// Initiate payment endpoint
paymentRouter.post('/initiate', authenticateToken, initiatePayment);

// Verify payment endpoint
paymentRouter.get('/verify/:reference', authenticateToken, verifyPayment);

export default paymentRouter;
