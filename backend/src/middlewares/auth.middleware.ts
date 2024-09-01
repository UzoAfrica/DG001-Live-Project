import { Request, Response, NextFunction } from 'express';
import User from '../database/models/user.model';

interface CustomRequest extends Request {
  user?: {
    id: string;
    isVerified: boolean;
  };
}

export const authenticateUser = async (req: CustomRequest, res: Response, next: NextFunction) => {
  const userId = req.session.userId; // Now, `userId` is correctly recognized

  if (!userId) {
    return res.status(401).json({ message: 'User not authenticated' });
  }

  try {
    // Fetch the user instance
    const user = await User.findByPk(userId) as InstanceType<typeof User> | null;

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
    console.error('Error authenticating user:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export default authenticateUser;
