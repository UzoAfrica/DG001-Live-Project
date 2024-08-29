import dotenv from 'dotenv';

/**
 * Application environment variables declared in the ".env" file.
 *
 * Check ".env.sample" to see what the ".env" file looks like.
 */

// Load environment variables from .env file
dotenv.config();
const appEnvironmentVariables = {
  nodeEnvironment: process.env.NODE_ENV as string,
  port: process.env.PORT as string,
  databaseURI: process.env.DATABASE_URI as string,
  googleClientId: process.env.GOOGLE_CLIENT_ID as string,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  sessionSecret: process.env.SESSION_SECRET as string,
  googleCallbackURL: process.env.GOOGLE_CALLBACK_URL as string,
};

export default appEnvironmentVariables;
