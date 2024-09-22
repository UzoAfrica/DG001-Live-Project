// routes/order.route.ts
import { Router } from 'express';
import { getOrders, createOrder } from '../controllers/ordersController';
// import { isAuthenticated } from '../middlewares/auth.middleware';
import { authenticateToken } from '../middlewares/auth.middleware';


const router = Router();

router.get('/users-orders/:userId', authenticateToken, getOrders);

// Create orders
router.post('/create-orders/:userId', authenticateToken, createOrder);

export default router;
