import { createTransport } from 'nodemailer';
import appEnvironmentVariables from './app-environment-variables.config';

const mailTransporter = createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: appEnvironmentVariables.mailUser,
    pass: appEnvironmentVariables.mailPassword,
  },
});

export { mailTransporter };
