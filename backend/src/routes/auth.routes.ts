import { Router, Request, Response, NextFunction } from 'express';
import passport from 'passport';

const router = Router();

// Google Auth Routes
router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req: Request, res: Response) => {
    // Successful authentication, redirect home.
    res.redirect('/');
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

export default router;
