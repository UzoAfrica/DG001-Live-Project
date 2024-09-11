import { Request, Response } from 'express';
import Product from '../database/models/product.model';
import UserProducts from '../database/models/user-product.model';
import User from '../database/models/user.model';

// Get all products in the user's wishlist
export const getWishlist = async (req: Request, res: Response) => {
    const { userId } = req.params;
  
    try {
      // Find user and include associated products in the wishlist
      const user = await User.findByPk(userId, {
        include: [
          {
            model: Product, 
            through: {
              attributes: [], 
            },
          },
        ],
      });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Access the associated products through the `Products` property
      const wishlistProducts = await user.get('Products');
      res.status(200).json(wishlistProducts);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error', error });
    }
  };
  
  // Add a product to the user's wishlist
  export const addToWishlist = async (req: Request, res: Response) => {
    const { userId, productId } = req.params;
  
    try {
      const user = await User.findByPk(userId);
      const product = await Product.findByPk(productId);
  
      if (!user || !product) {
        return res.status(404).json({ message: 'User or Product not found' });
      }
  
      // Add product to the user's wishlist
      await UserProducts.create({
        UserId: userId,
        ProductId: productId,
        quantity: 1, 
      });
  
      res.status(200).json({ message: 'Product added to wishlist' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };
  
  // Remove a product from the user's wishlist
  export const removeFromWishlist = async (req: Request, res: Response) => {
    const { userId, productId } = req.params;
  
    try {
      const userProduct = await UserProducts.findOne({
        where: { UserId: userId, ProductId: productId },
      });
  
      if (!userProduct) {
        return res.status(404).json({ message: 'Product not found in wishlist' });
      }
  
      await userProduct.destroy();
      res.status(200).json({ message: 'Product removed from wishlist' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };