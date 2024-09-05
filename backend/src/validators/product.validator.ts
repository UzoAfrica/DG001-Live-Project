import Joi from 'joi';

// Validation schema for adding a product
export const addProductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  imageUrl: Joi.array().items(Joi.string().uri()).optional(),
  videoUrl: Joi.string().optional(),
  quantity: Joi.number().required(),
  userId: Joi.number().required(),
  shopId: Joi.number().required(),
  isAvailable: Joi.boolean().required(),
  // noOfSales: Joi.number().optional(),
});

// Validation schema for updating a product
export const updateProductSchema = Joi.object({
  name: Joi.string().optional(),
  description: Joi.string().optional(),
  price: Joi.number().optional(),
  imageUrl: Joi.array().items(Joi.string().uri()).optional(),
  videoUrl: Joi.string().optional(),
  quantity: Joi.number().optional(),
  userId: Joi.number().optional(),
  shopId: Joi.number().optional(),
  isAvailable: Joi.boolean().optional(),
  noOfSales: Joi.number().optional(),
});

// Validation schema for getting a specific product by ID
export const getSpecificProductSchema = Joi.string().guid().required();
