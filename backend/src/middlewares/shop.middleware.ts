// import { NextFunction, Request, Response } from 'express';
// import Shop from '../database/models/my-shop.model';

// // Middleware to check if the shop exists
// export const checkShopExists = async (req: Request, res: Response, next: NextFunction) => {
  
//   const { id } = req.params;

//   try {
//     const shop = await Shop.findByPk(id);
//     if (!shop) {
//       return res.status(404).json({ message: 'Shop not found.' });
//     }
//     next();
//   } catch (error) {
//     console.error('Error checking shop existence:', error);
//     res.status(500).json({ message: 'Internal server error.' });
//   }
// };

// // Middleware to check if the user is the owner of the shop
// export const checkShopOwner = async (req: Request, res: Response, next: NextFunction) => {
  
//   const { id } = req.params;
//   const user = req.user as { id: string }; 

//   try {
//     const shop = await Shop.findByPk(id);
//     if (shop && shop.getDataValue('UserId') !== user.id) {
//       return res.status(403).json({ message: 'Unauthorized to modify this shop.' });
//     }
//     console.log("Reach here");
//     next();
//   } catch (error) {
//     console.error('Error checking shop owner:', error);
//     res.status(500).json({ message: 'Internal server error.' });
//   }
// };

import { NextFunction, Request, Response } from 'express';
import Shop from '../database/models/my-shop.model';

// Define a custom interface to extend the Request object
interface CustomRequest extends Request {
  shop?: InstanceType<typeof Shop>;  // Attach shop to the request object
}

// Middleware to check if the shop exists
export const checkShopExists = async (req: CustomRequest, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    const shop = await Shop.findByPk(id);
    if (!shop) {
      return res.status(404).json({ message: 'Shop not found.' });
    }

    // Attach shop object to the request so that it's available in subsequent middleware or handlers
    req.shop = shop;
    next();
  } catch (error) {
    console.error('Error checking shop existence:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// Middleware to check if the user is the owner of the shop
export const checkShopOwner = async (req: CustomRequest, res: Response, next: NextFunction) => {
  const { shop } = req; 
  const user = req.user as { id: string }; 

  if (!shop) {
    return res.status(404).json({ message: 'Shop not found.' });
  }

  try {
    if (shop.getDataValue('UserId') !== user.id) {
      return res.status(403).json({ message: 'Unauthorized to modify this shop.' });
    }

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error('Error checking shop owner:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};
