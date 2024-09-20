import { Request, Response } from 'express';
import OTP from '../database/models/otp.model';
import sendEmail from '../utils/email.util';
import fs from 'fs';
import path from 'path';

// Define the sendOTP function
export const sendOTP = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email } = req.body;

  try {
    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: 'Email is required' });
    }

    // Generate a random OTP
    const generatedOtp = Math.floor(1000 + Math.random() * 9000);

    // Save OTP to the database
    await OTP.create({
      userEmail: email,
      otp: generatedOtp,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000), 
    });

    // Read the OTP email template
    const templatePath = path.join(__dirname, '../frontend/otpemailTemplate.html');
    let emailTemplate = fs.readFileSync(templatePath, 'utf8');

    // Replace the placeholder with the actual OTP
    emailTemplate = emailTemplate.replace('{{OTP}}', generatedOtp.toString());


    // Send OTP via email
    await sendEmail(res, {
      to: email,
      subject: 'Your OTP',
      html: emailTemplate, //send the html template
      //text: `Your OTP is: ${generatedOtp}. It will expire in 10 minutes.`,
    });

    return res.status(200).json({
      success: true,
      message: 'OTP sent successfully',
    });
  } catch (error) {
    console.error('Error sending OTP:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send OTP',
    });
  }
};
