import { Router, RequestHandler } from 'express';
import { createShop, updateShop, deleteShop } from '../controllers/shop.controller';
import { authenticateToken } from '../middlewares/auth.middleware'; // Updated to match the correct export
import upload from '../utils/upload'; // Import upload middleware

const router = Router();

// Route to create a shop with file upload
router.post(
  '/shops',
  authenticateToken as RequestHandler, 
  upload.fields([
    { name: 'videos', maxCount: 5 },
    { name: 'images', maxCount: 5 },
  ]),
  createShop
);

// Route to update a shop with file upload
router.put(
  '/shops/:id',
  authenticateToken as RequestHandler, 
  upload.fields([
    { name: 'videos', maxCount: 5 },
    { name: 'images', maxCount: 5 },
  ]),
  updateShop
);

// Route to delete a shop
router.delete(
  '/shops/:id',
  authenticateToken as RequestHandler, // Corrected export from middleware
  deleteShop
);

export default router;
