import { RequestHandler, Router } from 'express';
import {
  createShop,
  deleteShop,
  updateShop,
  getAllShops,
  getShop,
} from '../controllers/shop.controller';
import { authenticateToken } from '../middlewares/auth.middleware';
import {
  checkShopExists,
  checkShopOwner,
} from '../middlewares/shop.middleware'; 
import upload from '../middlewares/multer';
import { validateShop } from '../validators/shop.validator'; 

const router = Router();

// Route to get all shops
router.get('/shops', authenticateToken as RequestHandler, getAllShops);

// Route to get a single shop by ID
router.get('/shops/:id', authenticateToken as RequestHandler, checkShopExists, getShop);

// Route to create a shop with file upload and validation
router.post(
  '/create-shop',
  authenticateToken as RequestHandler,
  upload.fields([
    { name: 'videos', maxCount: 5 },
    { name: 'images', maxCount: 5 },
  ]),
  // validateShop, // Add validation middleware
  createShop
);

// Route to update a shop with file upload, validation, and ownership check
router.put(
  '/update-shop/:id',
  authenticateToken as RequestHandler,
  checkShopExists, 
  checkShopOwner, 
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
  checkShopExists,
  checkShopOwner, 
  deleteShop
);

export default router;
