import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../database/models/user.model';
import appEnvironmentVariables from '../config/app-environment-variables.config';

// Define the AuthenticatedRequest type to include user property
export interface AuthenticatedRequest extends Request {
  user?: any;
}

// Middleware to authenticate the token
export const authenticateToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token missing' });
  }

  jwt.verify(
    token,
    appEnvironmentVariables.jwtSecret as string,
    (err, user) => {
      if (err) return res.status(403).json({ message: 'Invalid access token' });
      req.user = user; // Attach user info to request object
      next();
    }
  );
};


interface CustomRequest extends Request {
  user?: {
    id: string;
    isVerified: boolean;
  };
}

export const authenticateUser = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const userId = req.session?.userId; // Ensure `req.session` exists

  if (!userId) {
    return res.status(401).json({ message: 'User not authenticated' });
  }

  try {
    // Fetch the user instance
    const user = (await User.findByPk(userId)) as InstanceType<
      typeof User
    > | null;

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    if (!user.getDataValue('isVerified')) {
      return res.status(403).json({ message: 'User is not verified' });
    }

    // Attach user information to request object
    req.user = {
      id: user.getDataValue('id'),
      isVerified: user.getDataValue('isVerified'),
    };

    next();
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error authenticating user:', error.message);
      res.status(500).json({ message: 'Server error', error: error.message });
    } else {
      console.error('Unexpected error:', error);
      res.status(500).json({
        message: 'Server error',
        error: 'An unexpected error occurred',
      });
    }
  }
};

export default authenticateUser;
