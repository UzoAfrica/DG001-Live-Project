import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User, { validateUser } from '../models/User.Model';
import OTP from '../database/models/otp.model';
import sendVerificationEmail from '../utils/mailSender.utils';

export const signup = async (req: Request, res: Response) => {
  const { error } = validateUser(req.body);
  if (error) {
    return res.status(400).json(error.details[0].message);
  }
  try {
    const { name, email, password, otp } = req.body;

    // Check if all details are provided
    if (!name || !email || !password) {
      res.status(403).json({
        success: false,
        message: 'All fields are required',
      });
      return;
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({
        success: false,
        message: 'User already exists',
      });
      return;
    }

    // Find the most recent OTP for the email
    const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
    if (response.length === 0 || otp !== response[0].otp) {
      res.status(400).json({
        success: false,
        message: 'The OTP is not valid',
      });
      return;
    }
    // Check if the OTP has expired (assuming OTP is valid for 5 minutes)
    const otpCreatedAt = response[0].createdAt;
    const otpExpirationTime = 5 * 60 * 1000; // 5 minutes in milliseconds
    if (Date.now() - otpCreatedAt.getTime() > otpExpirationTime) {
      res.status(400).json({
        success: false,
        message: 'The OTP has expired',
      });
      return;
    }

    // Secure password
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({
          success: false,
          message: `Hashing password error for ${password}: ` + error.message,
        });
      }
    }

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
    const otpDoc = new OTP({ email, otp: generatedOtp });
    await otpDoc.save();

    await sendVerificationEmail(email, generatedOtp);

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: newUser,
    });
  } catch (error) {
    console.error('Error registering user:', error);
    if (error instanceof Error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
};
