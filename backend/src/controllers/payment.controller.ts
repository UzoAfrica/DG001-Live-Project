import axios from 'axios';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import appEnvironmentVariables from '../config/app-environment-variables.config';
import Payment from '../database/models/payment.model';
import {
  initiatePaymentSchema,
  verifyPaymentSchema,
} from '../validators/payment.validator';

// Paystack's axios setup
const axiosForPaystack = axios.create({
  baseURL: 'https://api.paystack.co',
  headers: {
    Authorization: `Bearer ${appEnvironmentVariables.paystackSecretKey}`,
  },
});

export const initiatePayment = async (req: Request, res: Response) => {
  // Validation Error
  const validationResult = initiatePaymentSchema.validate(req.body);
  if (validationResult.error)
    return res
      .status(400)
      .json({ message: validationResult.error.details[0].message, data: null });

  try {
    const { amount, email, UserId, ProductId } = req.body;
    const reference = uuidv4(); // Unique transaction reference
    const response = await axiosForPaystack.post('/transaction/initialize', {
      amount: amount * 100, // Paystack expects amount in kobo
      email,
      reference,
      callback_url: 'http://localhost:5173/shop',
    });

    if (!response.data.status) {
      return res.status(400).json({
        status: false,
        message: 'Payment initiation failed',
      });
    }
    // Store payment in database
    await Payment.create({
      UserId,
      amount,
      reference,
      status: 'pending',
      ProductId,
    });

    return res.status(200).json({
      status: true,
      message: 'Payment initiated',
      data: {
        authorizationUrl: response.data.data.authorization_url,
        reference,
      },
    });
  } catch (error) {
    console.error('Error initiating payment:', error);
    return res.status(500).json({
      status: false,
      message: 'An error occurred while initiating payment',
    });
  }
};

export const verifyPayment = async (req: Request, res: Response) => {
  // Validation Error
  const validationResult = verifyPaymentSchema.validate(req.params.reference);
  if (validationResult.error)
    return res
      .status(400)
      .json({ message: validationResult.error.details[0].message, data: null });

  try {
    const { reference } = req.params;

    const response = await axiosForPaystack.get(
      `/transaction/verify/${reference}`
    );

    if (!response.data.status && response.data.data.status !== 'success') {
      return res.status(400).json({
        status: false,
        message: 'Payment verification failed',
      });
    }
    const payment = await Payment.findOne({ where: { reference } });
    if (!payment) {
      return res.status(404).json({
        status: false,
        message: 'Payment record not found',
      });
    }

    // Update payment status to "success"
    payment.set('status', 'success');
    await payment.save();

    return res.status(200).json({
      status: true,
      message: 'Payment verified successfully',
    });
  } catch (error) {
    console.error('Error verifying payment:', error);
    return res.status(500).json({
      status: false,
      message: 'An error occurred while verifying payment',
    });
  }
};
