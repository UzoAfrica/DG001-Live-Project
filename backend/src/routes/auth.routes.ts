import { Router, Request, Response, NextFunction } from 'express';
import passport from 'passport';
import User from '../database/models/user.model';
import appEnvironmentVariables from '../config/app-environment-variables.config';
import jwt from 'jsonwebtoken'

const router = Router();

// Route for initiating Google login
router.get('/google/login', (req: Request, res: Response, next: NextFunction) => {
  req.query.action = 'login'; // Set action to 'login' for this route
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    state: 'login',
  })(req, res, next);
});

// Route for initiating Google signup
router.get('/google/signup', (req: Request, res: Response, next: NextFunction) => {
  req.query.action = 'signup'; // Set action to 'signup' for this route
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    state: 'signup',
  })(req, res, next);
});

// Google OAuth callback route
router.get('/google/callback', async (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('google', async (err: Error | null, user: Express.User | any) => {
    if (err) {
      return next(err);
    }

    const action = req.query.state || 'login'; // Default to 'login' if state is not provided

    if (user) {
      try {
        // Check if user already exists in database
        const existingUser = await User.findOne({ where: { googleID: user.profile.id } });

    

        if (existingUser) {

          const token = jwt.sign(
            {
              id: existingUser.getDataValue('id'),
              role: existingUser.getDataValue('role'),
              name: existingUser.getDataValue('name'),
              isVerified: existingUser.getDataValue('isVerified'),
            },
            appEnvironmentVariables.jwtSecretkey as string,
            {
              expiresIn: appEnvironmentVariables.jwtExpiresIn,
            }
          );
            // Redirect with token in query parameter
            return res.redirect(`http://localhost:5173/callback?token=${token}`);
        
        }

        const { name, email, email_verified, picture } = user.profile._json;

        if (action === 'signup') {
          // Create new user if signing up
          await User.create({
            name,
            email,
            googleID: user.profile.id,
            profileImage: picture,
            role: 'user', // Default role set to 'user'
            referralSource: "Instagram",
            isVerified: email_verified,
          });
            // Redirect with token in query parameter
            return res.redirect(`http://localhost:5173/login`);
        
        }
      } catch (error) {
        return next(error);
      }

      // Successful login, redirect to frontend
      req.login(user, (loginErr) => {
        if (loginErr) {
          return next(loginErr);
        }
        // Redirect to frontend
        return res.redirect('http://localhost:5173/');
      });
    } else {
      // Handle user not found error
      return res.redirect('/login?error=User not found.');
    }
  })(req, res, next);
});

// Properly typed 'logout' route using 'next'
router.get('/logout', (req: Request, res: Response, next: NextFunction) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

router.get('/home', (req: Request, res: Response) => {
  res.send('Hello World');
});

export default router;
