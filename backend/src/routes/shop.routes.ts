import { RequestHandler, Router } from 'express';
import {
  createShop,
  deleteShop,
  updateShop,
} from '../controllers/shop.controller';
import { authenticateToken } from '../middlewares/auth.middleware';
import {
  checkShopExists,
  checkShopOwner,
} from '../middlewares/shop.middleware'; // Import the middleware
import upload from '../utils/upload';
import { validateShop } from '../validators/shop.validator'; // Import the validator

const router = Router();

// Route to create a shop with file upload and validation
router.post(
  '/create-shop',
  authenticateToken as RequestHandler,
  upload.fields([
    { name: 'videos', maxCount: 5 },
    { name: 'images', maxCount: 5 },
  ]),
  validateShop, // Add validation middleware
  createShop
);

// Route to update a shop with file upload, validation, and ownership check
router.put(
  '/update-shop/:id',
  authenticateToken as RequestHandler,
  checkShopExists, // Check if shop exists
  checkShopOwner, // Check if the user is the owner
  upload.fields([
    { name: 'videos', maxCount: 5 },
    { name: 'images', maxCount: 5 },
  ]),
  updateShop
);

// Route to delete a shop with ownership check
router.delete(
  '/delete-shop/:id',
  authenticateToken as RequestHandler,
  checkShopExists, // Check if shop exists
  checkShopOwner, // Check if the user is the owner
  deleteShop
);

export default router;
