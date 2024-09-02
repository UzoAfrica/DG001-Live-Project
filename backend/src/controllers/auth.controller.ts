import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import OTP from '../database/models/otp.model';
import User from '../database/models/user.model';
import sendEmail from '../utils/email.util';
import { generateExpiryDate } from '../utils/reset.util';

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password, referralSource } = req.body;

    console.log(req.body);

    // Check if all required fields are provided
    if (!name || !email || !password || !referralSource) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists',
      });
    }

    // Secure the password by hashing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      referralSource,
      role: 'user', // Default role set to 'user'
      isVerified: false, // Default verification status set to false
    });

    // Generate a new OTP
    const generatedOtp = Math.floor(1000 + Math.random() * 9000);

    // Create a new OTP entry for the user
    await OTP.create({
      userEmail: email,
      otp: generatedOtp,
      expiresAt: generateExpiryDate(10), // OTP expires in 10 minutes
      UserId: newUser.getDataValue('id'),
    });

    // Send OTP email to the user
    await sendEmail(res, {
      to: email,
      subject: 'Your OTP',
      text: `Your OTP for email verification is: ${generatedOtp}. It will expire in 10 minutes.`,
    });

    // Respond with success
    return res.status(201).json({
      success: true,
      message:
        'User registered successfully. An OTP has been sent to your email address. Please input it in the OTP page.',
      user: newUser,
    });
  } catch (error) {
    console.error('Error registering user:', error);
    if (error instanceof Error) {
      return res.status(500).json({ success: false, error: error.message });
    }
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error' });
  }
};
