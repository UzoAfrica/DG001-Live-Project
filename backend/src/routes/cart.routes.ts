import { Router } from 'express';
import {
  getCart,
  addToCart,
  removeFromCart,
} from '../controllers/cart.controller';
import { authenticateToken } from '../middlewares/auth.middleware';

const router = Router();

// Route to get all products in the user's cart
router.get('/:userId/cart', authenticateToken, getCart);

// Route to add a product to the cart
router.post('/:userId/cart/:productId', authenticateToken, addToCart);

// Route to remove a product from the cart
router.delete('/:userId/cart/:productId', authenticateToken, removeFromCart);

export default router;

