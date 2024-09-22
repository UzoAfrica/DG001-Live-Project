import { NextFunction, Request, Response } from 'express';

const roleMiddleware = (roles: string[] = []) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const currentUser = req.user as any;
    if (!roles.includes(currentUser.role)) {
      return res.status(403).json({
        message: 'Cannot access this route as the current user',
        data: null,
      });
    }
    next();
  };
};

export default roleMiddleware;
