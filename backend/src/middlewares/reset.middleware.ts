import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import appEnvironmentVariables from '../config/app-environment-variables.config';

export interface resetTokenPayload {
  id: number;
}

const verifyResetToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token)
    return res.status(401).json({
      message: 'Missing reset token. Request for a new OTP',
      data: null,
    });

  try {
    const resetToken = jwt.verify(
      token,
      appEnvironmentVariables.resetTokenSecretKey as string
    ) as resetTokenPayload;

    req.resetToken = resetToken;
    next();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      res.status(400).json({
        message: 'Expired reset token. Request for a new OTP',
        data: null,
      });
    }
  }
};

export default verifyResetToken;
