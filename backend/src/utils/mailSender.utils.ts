import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export const sendVerificationEmail = async (
  email: string,
  otp: string
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
  } catch (error: never) {
    console.log(error.message);
    throw error;
  }
};

export default sendVerificationEmail;
