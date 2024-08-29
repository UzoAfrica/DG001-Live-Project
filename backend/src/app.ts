import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import createError, { HttpError } from 'http-errors';
import logger from 'morgan';
import appEnvironmentVariables from './config/appEnvironmentVariables.config';
import indexRouter from './routes/index.route';
import authRoutes from './routes/auth.routes';
import sequelize from './config/sequelize.config';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import session from 'express-session';

// Initialize app
const app = express();

// Middlewares
app.use(logger(appEnvironmentVariables.nodeEnvironment || 'dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Enable CORS middleware
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: 'GET, POST, PUT, HEAD, DELETE',
    optionsSuccessStatus: 200,
  })
);

// Register API entry route
app.use(indexRouter);
app.use('/auth', authRoutes);
// catch 404 and forward to general error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// General error handler
app.use((err: HttpError, req: Request, res: Response) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error =
    appEnvironmentVariables.nodeEnvironment === 'dev' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ mesage: err.message, data: null });
});

// Middleware for session management
app.use(
  session({
    secret: appEnvironmentVariables.sessionSecret || 'your_session_secret',
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Configure Passport and Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: appEnvironmentVariables.googleClientId,
      clientSecret: appEnvironmentVariables.googleClientSecret,
      callbackURL: appEnvironmentVariables.googleCallbackURL,
      passReqToCallback: true, // Pass request to callback to handle different actions (login/signup)
    },
    async (req: Request, accessToken, refreshToken, profile, done) => {
      try {
        const action = req.query.action || 'login'; // Determine the action based on the request or query params

        if (action === 'signup') {
          // Handle user signup logic
          const newUser = await createUserFromProfile(profile);
          return done(null, newUser as Express.User); // Ensure newUser is of type Express.User
        } else {
          // Handle user login logic
          const existingUser = await findUserByGoogleId(profile.id);
          if (existingUser) {
            return done(null, existingUser as Express.User); // Ensure existingUser is of type Express.User
          } else {
            return done(null, false, {
              message: 'User not found. Please sign up.',
            });
          }
        }
      } catch (error) {
        return done(error as Error, undefined); // Use undefined instead of null for type safety
      }
    }
  )
);

// Serialize user information into session
passport.serializeUser((user: Express.User, done) => {
  done(null, user);
});

// Deserialize user information from session
passport.deserializeUser((user: Express.User, done) => {
  done(null, user);
});

// Helper function to find a user by Google ID
async function findUserByGoogleId(
  googleId: string
): Promise<Express.User | null> {
  // Implement the logic to find the user in your database using Google ID
  return null; // Replace with actual user object if found
}

// Helper function to create a user from Google profile
async function createUserFromProfile(profile: any): Promise<Express.User> {
  // Implement the logic to create a new user in your database using Google profile info
  return profile as Express.User; // Replace with newly created user object
}

// Synchronize Database and start the server
sequelize
  .sync({ logging: false })
  .then(() => {
    console.log('Database synchronized successfully.');

    // Start API
    const port = appEnvironmentVariables.port || 5001;
    app.listen(port, () => {
      console.log(`Server listening at http://127.0.0.1:${port}`);
    });
  })
  .catch((error) => {
    console.error(`Database synchronization error: ${error}`);
  });

export default app;
