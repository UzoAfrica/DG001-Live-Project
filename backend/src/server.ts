import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import session from 'express-session';
import createError, { HttpError } from 'http-errors';
import logger from 'morgan';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import appEnvironmentVariables from './config/app-environment-variables.config';
import sequelize from './config/sequelize.config';
import authRoutes from './routes/auth.routes';
import imageRoute from './routes/imageRoute';
import indexRouter from './routes/index.route';
import profileRoute from './routes/profileRoute';
import adminRoute from './routes/adminRoute'

// Initialize app
const app = express();

// Middlewares
app.use(
  logger(
    appEnvironmentVariables.nodeEnvironment === 'production'
      ? 'combined'
      : 'dev'
  )
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Enable CORS middleware
app.use(
  cors({
    origin:
      appEnvironmentVariables.nodeEnvironment === 'production'
        ? 'https://your-production-site.com'
        : 'http://localhost:5173',
    credentials: true, // Important to allow credentials (cookies)
    methods: 'GET, POST, PUT, HEAD, DELETE',
    optionsSuccessStatus: 200,
  })
);

// Middleware for session management
app.use(
  session({
    secret: appEnvironmentVariables.sessionSecret || 'your_session_secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: appEnvironmentVariables.nodeEnvironment === 'production', // Use secure cookies in production
    },
  })
);

// Initialize passport and session support
app.use(passport.initialize());
app.use(passport.session());

// Configure Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: appEnvironmentVariables.googleClientId,
      clientSecret: appEnvironmentVariables.googleClientSecret,
      callbackURL: appEnvironmentVariables.googleCallbackURL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Here you would typically find or create the user in the database
        // For this example, we'll just return the profile provided by Google
        return done(null, { profile, accessToken, refreshToken });
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Serialize user into session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user from session
passport.deserializeUser((user, done) => {
  done(null, user as Express.User);
});

// Register API entry routes
app.use('/api', indexRouter);
app.use('/profile', profileRoute);
app.use('/image', imageRoute);
app.use('/auth', authRoutes);
app.use('/admin', adminRoute);

// Catch 404 and forward to general error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404, 'Resource not found'));
});

// General error handler
app.use((err: HttpError, req: Request, res: Response) => {
  console.error('Error: ', err.message);
  res.locals.message = err.message;
  res.locals.error =
    appEnvironmentVariables.nodeEnvironment === 'dev' ? err : {};

  res.status(err.status || 500).json({
    message: err.message,
    error: appEnvironmentVariables.nodeEnvironment === 'dev' ? err : undefined,
    data: null,
  });
});

// Synchronize Database and start the server
sequelize
  .sync({ logging: false, alter: true })
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
