import { Request, Response, NextFunction} from 'express';

export const isAdmin = (req: any, res: Response, next: NextFunction) => {

    const { role } = req.user;

    if(role !== 'admin'){
        res.status(403).json({ message: `Access denied! Not an Adimin`})
    }
    next();
};