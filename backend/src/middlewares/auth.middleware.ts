import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
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

// Ensure that there are exports in this file
export default { authenticateToken };
