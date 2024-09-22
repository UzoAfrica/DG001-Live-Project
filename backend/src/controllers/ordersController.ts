// controllers/orderController.ts
import { Request, Response } from 'express';
import Order from '../database/models/orders.model';
import { v4 } from 'uuid';

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

export const createOrder = async (req: Request, res: Response) => {
  try {
    let cart = req.body;
    console.log(cart);

    const userId = req.params.userId;
    const orders: any = [];
    await Promise.all(
      cart.map(async (item: any) => {
        const order = await Order.create({
          id: v4(),
          userId,
          productName: item.name,
          quantity: item.quantity,
          amountPaid: Number(item.price) * Number(item.quantity),
          deliveryStatus: 'Pending',
          dateOrdered: new Date(),
        });
        orders.push(order);
      })
    );
    res.status(200).json(orders);
  } catch (error) {
    console.error(error); // Log the actual error for debugging
    res.status(500).json({ message: 'Error fetching orders' });
  }
};
