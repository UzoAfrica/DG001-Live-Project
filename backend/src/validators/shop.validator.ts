import Joi from 'joi';

// Define the schema for shop creation and update
const shopSchema = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({
    'string.empty': 'Shop name cannot be empty.',
    'string.min': 'Shop name should have a minimum length of 3.',
    'string.max': 'Shop name should have a maximum length of 50.',
    'any.required': 'Shop name is required.',
  }),
  isOpen: Joi.boolean().default(true),
  description: Joi.string().max(500).optional().messages({
    'string.max': 'Description should not exceed 500 characters.',
  }),
  currency: Joi.string().max(10).optional().default('NGN'),
  category: Joi.string().optional().valid('ELECTRONICS', 'FASHION', 'FOOD', 'HEALTH', 'HOME', 'SPORTS', 'CHILDREN', 'OTHERS').messages({
    'string.empty': 'Category cannot be empty.',
    'any.only': 'Category must be one of ELECTRONICS, FASHION, FOOD, HEALTH, HOME, SPORTS, CHILDREN, or OTHERS.',
  }),
  shopAddress: Joi.string().min(10).required().messages({
    'string.empty': 'Shop address cannot be empty.',
    'string.min': 'Shop address should have a minimum length of 10.',
    'any.required': 'Shop address is required.',
  }),
  securityFeatures: Joi.string().optional(),
  coverImage: Joi.string().uri().optional().allow(null),
  country: Joi.string().max(100).optional().messages({
    'string.max': 'Country name should not exceed 100 characters.',
  }),
  street: Joi.string().max(100).optional().messages({
    'string.max': 'Street name should not exceed 100 characters.',
  }),
  state: Joi.string().max(100).optional().messages({
    'string.max': 'State name should not exceed 100 characters.',
  }),
  shippingAddress: Joi.string().max(200).optional().messages({
    'string.max': 'Shipping address should not exceed 200 characters.',
  }),
  shippingPrices: Joi.string().max(50).optional().messages({
    'string.max': 'Shipping prices description should not exceed 50 characters.',
  }),
  shippingServices: Joi.string().max(100).optional().messages({
    'string.max': 'Shipping services description should not exceed 100 characters.',
  }),
  zip: Joi.string().max(20).optional().messages({
    'string.max': 'ZIP code should not exceed 20 characters.',
  }),
  videoUrls: Joi.array().items(Joi.string().uri()).optional(),
});

// Middleware to validate shop data
export const validateShop = (req: any, res: any, next: any) => {
  const { error } = shopSchema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      message: 'Validation error',
      details: error.details.map((detail) => detail.message),
    });
  }

  next();
};
