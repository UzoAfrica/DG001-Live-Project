import { NextFunction, Request, Response } from 'express';
import { JwtPayload } from '../middlewares/auth.middleware';

const roleMiddleware = (roles: string[] = []) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const currentUser = req.user as JwtPayload;
    if (!roles.includes(currentUser.role)) {
      return res
        .status(403)
        .json({
          message: 'Cannot access this route as the current user',
          data: null,
        });
    }
    next();
  };
};

export default roleMiddleware;
