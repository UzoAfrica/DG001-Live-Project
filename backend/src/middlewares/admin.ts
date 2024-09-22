import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import appEnvironmentVariables from '../config/app-environment-variables.config'; // Assuming this is where your env variables are

export const authorizeRole = (req: Request, res: Response, next: NextFunction) => {
  // Extract the token from the Authorization header
  const token = req.header('Authorization');
  
  if (!token) return res.status(401).json({ message: 'Access Denied. No token provided.' });

  try {
    // Verify the token
    const decoded: any = jwt.verify(token, appEnvironmentVariables.jwtSecretkey as string);

    // Attach the user info to the request object
    req.user = decoded;

    // Check if the route has '/admin' in its path and the role is not 'admin'
    if (req.path.includes('/admin') && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access Denied. Admins only.' });
    }

    // Proceed to the next middleware or route handler
    next();
  } catch (ex) {
    return res.status(400).json({ message: 'Access Denied. Admins only.' });
  }
};
