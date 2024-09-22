import { Request, Response, NextFunction } from 'express';
import { addProductSchema, updateProductSchema, getSpecificProductSchema } from '../validators/product.validator';
import Product from '../database/models/product.model';

// Middleware to validate adding a new product
export const validateAddProduct = (req: Request, res: Response, next: NextFunction) => {
  const { error } = addProductSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

// Middleware to validate updating a product
export const validateUpdateProduct = (req: Request, res: Response, next: NextFunction) => {
  const { error } = updateProductSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

// Middleware to check if a product exists by ID
export const checkProductExists = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Attach product to request object for further processing in the route handler if needed
    (req as any).product = product;

    next();
  } catch (err) {
    console.error('Error checking product existence:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Middleware to validate getting a specific product by ID
export const validateGetSpecificProduct = (req: Request, res: Response, next: NextFunction) => {
  const validationResult = getSpecificProductSchema.validate(req.params.id);
  if (validationResult.error) {
    return res.status(400).json({ message: validationResult.error.details[0].message, data: null });
  }

  next();
};

// Export all middleware functions
export default {
  validateAddProduct,
  validateUpdateProduct,
  checkProductExists,
  validateGetSpecificProduct,
};
