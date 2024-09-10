import { Request, Response } from 'express';
import User from '../database/models/user.model';
import Product from '../database/models/product.model';
import UserProducts from '../database/models/user-product.model';

// Get all products in the user's cart
export const getCart = async (req: Request, res: Response) => {
    const { userId } = req.params;
  
    try {
      // Find user and include associated products in the cart
      const user = await User.findByPk(userId, {
        include: [
          {
            model: Product, 
            through: {
              attributes: ['quantity'], 
            },
          },
        ],
      });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Access the associated products through the `Products` property
      const cartProducts = user.get('Products');
      res.status(200).json(cartProducts);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };
  
  // Add a product to the user's cart
  export const addToCart = async (req: Request, res: Response) => {
    const { userId, productId } = req.params;
    const { quantity } = req.body;
  
    try {
      const user = await User.findByPk(userId);
      const product = await Product.findByPk(productId);
  
      if (!user || !product) {
        return res.status(404).json({ message: 'User or Product not found' });
      }
  
      // Add product to the user's cart
      await UserProducts.create({
        UserId: userId,
        ProductId: productId,
        quantity: quantity || 1,
      });
  
      res.status(200).json({ message: 'Product added to cart' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };
  
  // Remove a product from the user's cart
  export const removeFromCart = async (req: Request, res: Response) => {
    const { userId, productId } = req.params;
  
    try {
      const userProduct = await UserProducts.findOne({
        where: { UserId: userId, ProductId: productId },
      });
  
      if (!userProduct) {
        return res.status(404).json({ message: 'Product not found in cart' });
      }
  
      await userProduct.destroy();
      res.status(200).json({ message: 'Product removed from cart' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };