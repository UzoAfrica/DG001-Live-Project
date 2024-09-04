import { Request, Response, NextFunction, RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import User from '../database/models/user.model';
import appEnvironmentVariables from '../config/app-environment-variables.config';

// Define the AuthenticatedRequest type to include user property
export interface AuthenticatedRequest extends Request {
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
    return res.status(401).json({ message: 'Access token missing' });
  }

  try {
    // Decode the token to get the user ID
    const decoded = jwt.decode(token) as { id: string };
    const user = await User.findByPk(decoded.id);

    if (!user) {
      return res.status(403).json({ message: 'Invalid access token' });
    }

    // Properly type the callback in `jwt.verify`
    jwt.verify(
      token,
      (user as any).jwtSecretKey, // Assert the type here
      (err: jwt.VerifyErrors | null, decodedUser: any) => {
        if (err) return res.status(403).json({ message: 'Invalid access token' });
        req.user = decodedUser;
        next();
      }
    );
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
