import 'dotenv/config';

/**
 * Application environment variables declared in the ".env" file.
 *
 * Check ".env.sample" to see what the ".env" file looks like.
 */
const appEnvironmentVariables = {
  nodeEnvironment: process.env.NODE_ENV as string,
  port: process.env.PORT as string,
  databaseURI: process.env.DATABASE_URI as string,
  mailUser: process.env.MAIL_USER,
  mailPassword: process.env.MAIL_PASSWORD,
  frontendVerifyOTPPage: process.env.VERIFY_OTP_PAGE,
  resetTokenSecretKey: process.env.RESET_TOKEN_SECRET_KEY,
  resetTokenExpiresIn: process.env.RESET_TOKEN_EXPIRES_IN,
};

export default appEnvironmentVariables;
