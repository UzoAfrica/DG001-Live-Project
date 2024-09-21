// controllers/orderController.ts
import { Request, Response } from 'express';
import Order from '../database/models/orders.model';

export const getOrders = async (req: Request, res: Response) => {
  

  try {
    const userId = req.params.userId; 
    const orders = await Order.findAll({
      where: { userId },
    });
    res.status(200).json(orders);
  } catch (error) {

    console.error(error); // Log the actual error for debugging
    res.status(500).json({ message: 'Error fetching orders' });
  }
};
