import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import appEnvironmentVariables from '../config/app-environment-variables.config';
import OTP from '../database/models/otp.model';
import User from '../database/models/user.model';
import sendEmail from '../utils/my-email.util';
import { generateExpiryDate, generateOTP } from '../utils/reset.util';
import {
  resendOTPSchema,
  verifyOTPSchema,
} from '../validators/reset.validator';

export const resendOTP = async (req: Request, res: Response) => {
  // Validation Error
  const validationResult = resendOTPSchema.validate(req.body);
  if (validationResult.error)
    return res
      .status(400)
      .json({ message: validationResult.error.details[0].message, data: null });

  const { email } = req.body;

  try {
    // Verify user email exists
    const user = await User.findOne({ where: { email } });
    if (!user)
      return res
        .status(400)
        .json({ message: 'Email does not exist', data: null });

    // Check if user has existing OTP
    const userOTP = await OTP.findOne({ where: { userEmail: email } });
    if (!userOTP) {
      // Create new OTP for user
      const newUserOTP = await OTP.create({
        userEmail: email,
        otp: generateOTP(6),
        expiresAt: generateExpiryDate(50),
        UserId: user.getDataValue('id'),
      });

      // Send OTP mail
      await sendEmail(res, {
        to: email,
        subject: 'New OTP! 🔑',
        text: `Hi ${user.getDataValue('name')}, you requested a new OTP.\nHere's your new OTP: ${newUserOTP.getDataValue('otp')}.\nFollow this link to verify the OTP: ${appEnvironmentVariables.frontendVerifyOTPPage}`,
      });

      return res
        .status(200)
        .json({ message: 'New OTP generated. Check your email', data: null });
    } else {
      // Delete previous OTP
      await userOTP.destroy();

      // Create new OTP for user
      const newUserOTP = await OTP.create({
        userEmail: email,
        otp: generateOTP(6),
        expiresAt: generateExpiryDate(50),
        UserId: user.getDataValue('id'),
      });

      // Send OTP mail
      await sendEmail(res, {
        to: email,
        subject: 'New OTP! 🔑',
        text: `Hi ${user.getDataValue('name')}, you requested a new OTP.\nHere's your new OTP: ${newUserOTP.getDataValue('otp')}.\nFollow this link to verify the OTP: ${appEnvironmentVariables.frontendVerifyOTPPage}`,
      });

      return res
        .status(200)
        .json({ message: 'New OTP generated. Check your email', data: null });
    }
  } catch (error) {
    if (error instanceof Error) {
      // Remove the OTP we created
      const userOTP = await OTP.findOne({ where: { userEmail: email } });
      if (userOTP) await userOTP.destroy();

      console.error(error.message);

      return res.status(500).json({
        message: 'Failed to resend OTP:',
        data: null,
      });
    }
  }
};

export const verifyOTP = async (req: Request, res: Response) => {
  // Validation Error
  const validationResult = verifyOTPSchema.validate(req.body);
  if (validationResult.error)
    return res
      .status(400)
      .json({ message: validationResult.error.details[0].message, data: null });

  const { otp } = req.body;

  try {
    // Check if OTP exists
    const userOTP = await OTP.findOne({ where: { otp } });
    if (!userOTP) {
      return res
        .status(400)
        .json({ message: 'Invalid OTP. Request for a new OTP.', data: null });
    }

    // Check if OTP has expired
    if (new Date() > new Date(userOTP.getDataValue('expiresAt'))) {
      await userOTP.destroy();
      return res
        .status(400)
        .json({ message: 'Expired OTP. Request for a new OTP.', data: null });
    }

    // OTP is valid, but we still delete it.
    await userOTP.destroy();

    // Create token for Reset Password Page
    const resetPasswordToken = jwt.sign(
      {},
      appEnvironmentVariables.resetTokenSecretKey as string,
      {
        expiresIn: appEnvironmentVariables.resetTokenExpiresIn!,
      }
    );
    return res.status(200).json({
      message: 'OTP verification successful',
      data: { resetPasswordToken },
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);

      return res.status(500).json({
        message: 'Failed to verify OTP:',
        data: null,
      });
    }
  }
};

// export const changePassword = async (req: Request, res: Response) => {};
