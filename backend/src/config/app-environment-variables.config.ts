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
  googleClientId: process.env.GOOGLE_CLIENT_ID as string,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  sessionSecret: process.env.SESSION_SECRET as string,
  googleCallbackURL: process.env.GOOGLE_CALLBACK_URL as string,
  mailUser: process.env.MAIL_USER as string,
  mailPassword: process.env.MAIL_PASSWORD as string,
  frontendVerifyOTPPage: process.env.VERIFY_OTP_PAGE as string,
  resetTokenSecretKey: process.env.RESET_TOKEN_SECRET_KEY as string,
  resetTokenExpiresIn: process.env.RESET_TOKEN_EXPIRES_IN as string,
};

export default appEnvironmentVariables;
