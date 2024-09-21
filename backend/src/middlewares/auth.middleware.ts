import { Request, Response, NextFunction, RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import User from '../database/models/user.model';

// Define the AuthenticatedRequest type to include user property
export interface AuthenticatedRequest extends Request {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user?: any;
}

// Middleware to authenticate the token
export const authenticateToken: RequestHandler = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'You are not authorised to access this resource' });
  }

  try {

    const decoded = jwt.decode(token) as { id: string };

    if (!decoded) {
      return res.status(403).json({ message: 'Please login again' });
    }

    const user = await User.findByPk(decoded.id);

    if (!user) {
      return res.status(403).json({ message: 'User does not exist' });
    }

        req.user = user;
        next();

  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.status(401).json({ message: 'Unauthorized' });
};


