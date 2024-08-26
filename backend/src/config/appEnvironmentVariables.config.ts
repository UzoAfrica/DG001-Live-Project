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
};

export default appEnvironmentVariables;
