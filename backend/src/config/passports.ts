// src/config/passport.ts
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/User'; // Adjust the path based on your User model location


passport.serializeUser((user, done) => {
    done(null, user.id); // Store user ID in session
  });
  
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findByPk(id); // Fetch user from DB
      done(null, user); // Attach user to req.user
    } catch (error) {
      done(error);
    }
  });
  