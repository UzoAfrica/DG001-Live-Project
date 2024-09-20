import { RequestHandler, Router } from 'express';
import {
  createShop,
  deleteShop,
  getAllShops,
  getShop,
  updateShop,
} from '../controllers/shop.controller';
import { authenticateToken } from '../middlewares/auth.middleware';
import upload from '../middlewares/multer';
import {
  checkShopExists,
  checkShopOwner,
} from '../middlewares/shop.middleware';

const router = Router();

// Route to get all shops
router.get('/', authenticateToken as RequestHandler, getAllShops);

// Route to get a single shop by ID
router.get(
  '/:id',
  authenticateToken as RequestHandler,
  checkShopExists,
  getShop
);

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
  // upload.fields([
  //   { name: 'videos', maxCount: 5 },
  //   { name: 'images', maxCount: 5 },
  // ]),
  upload.single('image'),
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
