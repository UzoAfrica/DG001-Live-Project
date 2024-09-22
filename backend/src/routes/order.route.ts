// routes/order.route.ts
import { Router } from 'express';
import { getOrders } from '../controllers/ordersController';
import { isAuthenticated } from '../middlewares/auth.middleware';

const router = Router();

router.get('/users-orders', isAuthenticated, getOrders);

export default router;
