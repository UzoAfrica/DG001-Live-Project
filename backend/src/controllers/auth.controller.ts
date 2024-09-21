import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import appEnvironmentVariables from '../config/app-environment-variables.config';
import OTP from '../database/models/otp.model';
import User from '../database/models/user.model';
import sendEmail from '../utils/email.util';
import { generateExpiryDate } from '../utils/reset.util';
import { loginSchema } from '../validators/auth.validator';

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password, referralSource } = req.body;

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
      expiresAt: generateExpiryDate(120), // OTP expires in 10 minutes
      UserId: newUser.getDataValue('id'),
    });

    // Send OTP email to the user
    await sendEmail(res, {
      to: email,
      subject: 'Your OTP',
      text: `Your OTP for email verification is: ${generatedOtp}. It will expire in 10 minutes.`,
    });

    // await sendVerificationEmail(email, generatedOtp);

    res.status(201).json({
      success: false,
      message:
        'User registered successfully, an OTP has been sent to your email address. Please input it in the OTP page.',
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

export const login = async (req: Request, res: Response) => {
  const { error } = loginSchema.validate(req.body);

  if (error) return res.status(400).json({ error: error.details[0].message });

  const { email, password } = req.body;
  try {
    const user : any = await User.findOne({ where: { email } });

    if (!user)
      return res.status(400).json({ message: 'Invalid Email or Password' });

    const validPassword = await bcrypt.compare(
      password,
      user.getDataValue('password')
    );
    console.log(req.body)
    if (!validPassword)
      return res.status(400).json({ message: 'Invalid Email or Password' });


    // Check user role (admin or not)
    const role = user.getDataValue('role');
    if (role !== 'admin' && role !== 'user') {
      return res.status(403).json({ message: 'Access denied. Invalid role.' });
    }

    const token = jwt.sign(
      {
        id: user.getDataValue('id'),
        role: user.getDataValue('role'),
        name: user.getDataValue('name'),
        isVerified: user.getDataValue('isVerified'),
      },
      appEnvironmentVariables.jwtSecretkey as string,
      {
        expiresIn: appEnvironmentVariables.jwtExpiresIn,
      }
    );

    const loginMessage = role === 'admin' ? 'Admin logged in successfully' : 'User logged in successfully';

    res.header('Authorization', token).json({
      message: loginMessage,
      data: { token, role: user.getDataValue('role'), user },
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);

      return res.status(500).json({
        message: 'Failed login',
        data: null,
      });
    }
  }
};
