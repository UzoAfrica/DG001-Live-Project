import { Request, Response } from 'express';
import appEnvironmentVariables from '../config/app-environment-variables.config';
import OTP from '../database/models/otp.model';
import User from '../database/models/user.model';
import sendEmail from '../utils/my-email.util';
import { generateExpiryDate, generateOTP } from '../utils/reset.util';
import { resendOTPSchema } from '../validators/reset.validator';

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

    // Check if user has existing otp
    const userOTP = await OTP.findOne({ where: { userEmail: email } });
    if (!userOTP) {
      // Create new otp for user
      const newUserOTP = await OTP.create({
        userEmail: email,
        otp: generateOTP(6),
        expiresAt: generateExpiryDate(50),
        UserId: user.getDataValue('id'),
      });

      // Send otp mail
      await sendEmail(res, {
        to: email,
        subject: 'New OTP! 🔑',
        text: `Hi ${user.getDataValue('name')}, you requested a new OTP.\nHere's your new OTP: ${newUserOTP.getDataValue('otp')}.\nFollow this link to verify the OTP: ${appEnvironmentVariables.frontendVerifyOTPPage}`,
      });

      return res.status(200).json({ message: 'New OTP generated', data: null });
    } else {
      // Delete previous otp
      await userOTP.destroy();

      // Create new otp for user
      const newUserOTP = await OTP.create({
        userEmail: email,
        otp: generateOTP(6),
        expiresAt: generateExpiryDate(50),
        UserId: user.getDataValue('id'),
      });

      // Send otp mail
      await sendEmail(res, {
        to: email,
        subject: 'New OTP! 🔑',
        text: `Hi ${user.getDataValue('name')}, you requested a new OTP.\nHere's your new OTP: ${newUserOTP.getDataValue('otp')}.\nFollow this link to verify the OTP: ${appEnvironmentVariables.frontendVerifyOTPPage}`,
      });

      return res.status(200).json({ message: 'New OTP generated', data: null });
    }
  } catch (error) {
    if (error instanceof Error) {
      // Remove the otp we created
      const userOTP = await OTP.findOne({ where: { userEmail: email } });
      if (userOTP) await userOTP.destroy();

      console.error(error.message);

      return res.status(500).json({
        message: 'Failed to resend otp:',
        data: null,
      });
    }
  }
};

// export const verifyOTP = async (req: Request, res: Response) => {};

// export const changePassword = async (req: Request, res: Response) => {};
