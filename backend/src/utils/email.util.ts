import { Response } from 'express';
import { mailTransporter } from '../config/email.config';

const sendMail = async (res: Response, mailOptions: object) => {
  mailTransporter.sendMail(mailOptions, (error) => {
    if (error) {
      throw new Error(error.message);
      // res.status(500).json({ message: error, data: null });
    }
  });
};

export default sendMail;
