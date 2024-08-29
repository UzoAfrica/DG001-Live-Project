import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import OTP from '../database/models/otp.model';
import User from '../database/models/user.model';
import sendEmail from '../utils/email.util';
import { generateExpiryDate } from '../utils/reset.util';

export const signup = async (req: Request, res: Response) => {
  // const { error } = validateUser(req.body);
  // if (error) {
  //   return res.status(400).json(error.details[0].message);
  // }
  try {
    const { name, email, password, referralSource } = req.body;

    // Check if all details are provided
    if (!name || !email || !password || !referralSource) {
      res.status(403).json({
        success: false,
        message: 'All fields are required',
      });
      return;
    }

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email: email } });
    // user
    if (existingUser) {
      res.status(400).json({
        success: false,
        message: 'User already exists',
      });
      return;
    }

    // Find the most recent OTP for the email
    // const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
    // if (response.length === 0 || otp !== response[0].otp) {
    //   res.status(400).json({
    //     success: false,
    //     message: 'The OTP is not valid',
    //   });
    //   return;
    // }
    // Check if the OTP has expired (assuming OTP is valid for 5 minutes)
    // const otpCreatedAt = response[0].createdAt;
    // const otpExpirationTime = 5 * 60 * 1000; // 5 minutes in milliseconds
    // if (Date.now() - otpCreatedAt.getTime() > otpExpirationTime) {
    //   res.status(400).json({
    //     success: false,
    //     message: 'The OTP has expired',
    //   });
    //   return;
    // }

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
      referralSource,
    });

    const generatedOtp = Math.floor(1000 + Math.random() * 9000);

    // Create new OTP for user
    await OTP.create({
      userEmail: email,
      otp: generatedOtp,
      expiresAt: generateExpiryDate(50),
      UserId: newUser.getDataValue('id'),
    });

    // const otpDoc = new OTP({ email, otp: generatedOtp });
    // await otpDoc.save();

    // Send OTP mail
    await sendEmail(res, {
      to: email,
      subject: 'Your OTP',
      text: `Your OTP for email verification is: ${generatedOtp}. It will expire in 10 minutes.`,
    });

    // await sendVerificationEmail(email, generatedOtp);

    res.status(201).json({
      success: false,
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
