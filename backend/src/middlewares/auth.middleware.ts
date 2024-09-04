import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import appEnvironmentVariables from '../config/app-environment-variables.config';

export interface JwtPayload {
  id: string;
  role: string;
  name: string;
  isVerified: boolean;
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token)
    return res
      .status(401)
      .json({ message: 'Access Denied. JWT token is required', data: null });

  try {
    const userJWT = jwt.verify(
      token,
      appEnvironmentVariables.jwtSecretkey
    ) as JwtPayload;

    req.user = userJWT;
    next();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return res
        .status(400)
        .json({ message: 'Invalid/Expired JWT token', data: null });
    }
  }
};

export default authMiddleware;
