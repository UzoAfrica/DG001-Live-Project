import Joi from 'joi';

// Validation schema for adding a product
export const addProductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  imageUrl: Joi.array().items(Joi.string().uri()).optional(),
  videoUrl: Joi.string().uri().optional(),
  quantity: Joi.number().required(),
  userId: Joi.string().guid({ version: ['uuidv4'] }).required(),
  shopId: Joi.string().guid({ version: ['uuidv4'] }).required(),
  isAvailable: Joi.boolean().required(),
  noOfSales: Joi.number().optional().default(0),
});

// Validation schema for updating a product
export const updateProductSchema = Joi.object({
  name: Joi.string().optional(),
  description: Joi.string().optional(),
  price: Joi.number().optional(),
  imageUrl: Joi.array().items(Joi.string().uri()).optional(),
  videoUrl: Joi.string().uri().optional(),
  quantity: Joi.number().optional(),
  userId: Joi.string().guid({ version: ['uuidv4'] }).optional(),
  shopId: Joi.string().guid({ version: ['uuidv4'] }).optional(),
  isAvailable: Joi.boolean().optional(),
  noOfSales: Joi.number().optional().default(0),
});

// Validation schema for getting a specific product by ID
export const getSpecificProductSchema = Joi.string().guid({ version: ['uuidv4'] }).required();

export const reviewSchema = Joi.object({
  comment: Joi.string().required(),
  rating: Joi.number().min(1).max(5).required(),
});

