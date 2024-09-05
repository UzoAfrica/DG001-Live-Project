import { Router, Request, Response, NextFunction } from 'express';
import passport from 'passport';

const router = Router();

// Route for initiating Google login
router.get(
  '/google/login',
  (req: Request, res: Response, next: NextFunction) => {
    req.query.action = 'login'; // Set action to 'login' for this route
    passport.authenticate('google', {
      scope: ['profile', 'email'],
      state: 'login',
    })(req, res, next);
  }
);

// Route for initiating Google signup
router.get(
  '/google/signup',
  (req: Request, res: Response, next: NextFunction) => {
    req.query.action = 'signup'; // Set action to 'signup' for this route
    passport.authenticate('google', {
      scope: ['profile', 'email'],
      state: 'signup',
    })(req, res, next);
  }
);

// Google OAuth callback route
router.get(
  '/google/callback',
  (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate(
      'google',
      (err: Error | null, user: Express.User | false) => {
        if (err) {
          return next(err);
        }

        const action = req.query.state || 'login'; // Default to 'login' if state is not provided

        if (!user) {
          if (action === 'signup') {
            // Handle signup-specific error
            return res.redirect(
              '/signup?error=User not found, please sign up.'
            );
          } else {
            // Handle login-specific error
            return res.redirect('/login?error=User not found.');
          }
        }

        // Successful authentication, log in the user
        req.login(user, (loginErr) => {
          if (loginErr) {
            return next(loginErr);
          }
          return res.redirect('/');
        });
      }
    )(req, res, next);
  }
);

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
