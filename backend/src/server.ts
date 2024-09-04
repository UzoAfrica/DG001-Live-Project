import session from 'express-session';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import app from './app';
import appEnvironmentVariables from './config/app-environment-variables.config';
import sequelize from './config/sequelize.config';
import authRoutes from './routes/auth.routes'; // Import the new route file

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
    },
    (accessToken, refreshToken, profile, done) => {
      // Here, you would typically search for the user in your database
      // If the user exists, return the user object; otherwise, create a new user
      // For this example, we'll just return the profile provided by Google
      return done(null, profile);
    }
  )
);

// Serialize user information into session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user information from session
passport.deserializeUser((user, done) => {
  done(null, user as Express.User);
});

// Use the new authentication routes
app.use('/', authRoutes);

// Synchronize Database and start the server
sequelize
  .sync({ logging: true, alter: true })
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
 