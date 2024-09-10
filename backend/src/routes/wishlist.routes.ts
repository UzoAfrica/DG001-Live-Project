import { Router } from 'express';
import {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
} from '../controllers/wishlist.controller';
import { authenticateToken } from '../middlewares/auth.middleware';

const router = Router();

// Route to get all products in the user's wishlist
router.get('/:userId/wishlist', authenticateToken, getWishlist);

// Route to add a product to the wishlist
router.post('/:userId/wishlist/:productId', authenticateToken, addToWishlist);

// Route to remove a product from the wishlist
router.delete('/:userId/wishlist/:productId', authenticateToken, removeFromWishlist);

export default router;
