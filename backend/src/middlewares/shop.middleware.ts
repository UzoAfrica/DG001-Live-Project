import { NextFunction, Request, Response } from 'express';
import Shop from '../database/models/my-shop.model';

// Middleware to check if the shop exists
export const checkShopExists = async (req: Request, res: Response, next: NextFunction) => {
  
  const { id } = req.params;

  try {
    const shop = await Shop.findByPk(id);
    if (!shop) {
      return res.status(404).json({ message: 'Shop not found.' });
    }
    next();
  } catch (error) {
    console.error('Error checking shop existence:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// Middleware to check if the user is the owner of the shop
export const checkShopOwner = async (req: Request, res: Response, next: NextFunction) => {
  
  const { id } = req.params;
  const user = req.user as { id: string }; // Assuming user is added to req by auth middleware

  try {
    const shop = await Shop.findByPk(id);
    if (shop && shop.getDataValue('UserId') !== user.id) {
      return res.status(403).json({ message: 'Unauthorized to modify this shop.' });
    }
    console.log("Reach here");
    next();
  } catch (error) {
    console.error('Error checking shop owner:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};
