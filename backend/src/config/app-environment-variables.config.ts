import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

/**
 * Application environment variables declared in the ".env" file.
 * Ensure all variables are defined in your ".env" file.
 */
const appEnvironmentVariables = {
  nodeEnvironment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || '5001',
  databaseURI: process.env.DATABASE_URI as string,
  googleClientId: process.env.GOOGLE_CLIENT_ID as string,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  sessionSecret: process.env.SESSION_SECRET as string,
  googleCallbackURL: process.env.GOOGLE_CALLBACK_URL as string,
  mailUser: process.env.MAIL_USER as string,
  mailPassword: process.env.MAIL_PASSWORD as string,
  frontendVerifyOTPPage: process.env.VERIFY_OTP_PAGE as string,
  resetTokenSecretKey: process.env.RESET_TOKEN_SECRET_KEY as string,
  resetTokenExpiresIn: process.env.RESET_TOKEN_EXPIRES_IN as string,
  jwtSecret: process.env.JWT_SECRET_KEY as string, // Added this missing key
  jwtExpiresIn: process.env.JWT_EXPIRES_IN as string, // Added this missing key
};

// Ensure all required environment variables are set
const requiredVariables = [
  'databaseURI',
  'googleClientId',
  'googleClientSecret',
  'sessionSecret',
  'googleCallbackURL',
  'mailUser',
  'mailPassword',
  'frontendVerifyOTPPage',
  'resetTokenSecretKey',
  'resetTokenExpiresIn',
  'jwtSecret', // Added to required variables
  'jwtExpiresIn', // Added to required variables
];

requiredVariables.forEach((key) => {
  if (!appEnvironmentVariables[key as keyof typeof appEnvironmentVariables]) {
    throw new Error(`Environment variable ${key} is not set in the .env file`);
  }
});

export default appEnvironmentVariables;
