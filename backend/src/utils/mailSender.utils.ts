import nodemailer from 'nodemailer';
import appEnvironmentVariables from '../config/app-environment-variables.config';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  auth: {
    user: appEnvironmentVariables.mailUser,
    pass: appEnvironmentVariables.mailPassword,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const sendVerificationEmail = async (
  email: string,
  otp: number
): Promise<void> => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Email Verification',
    text: `Your OTP for email verification is: ${otp}. It will expire in 10 minutes.`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email info: ', info);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      throw error;
    }
  }
};

export default sendVerificationEmail;
