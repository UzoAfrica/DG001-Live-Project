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
  securityFeatures: Joi.string().optional(),
  shopAddress: Joi.string().min(10).required().messages({
    'string.empty': 'Shop address cannot be empty.',
    'string.min': 'Shop address should have a minimum length of 10.',
    'any.required': 'Shop address is required.',
  }),
  country: Joi.string().optional(),
  street: Joi.string().optional(),
  state: Joi.string().optional(),
  shippingAddress: Joi.string().optional(),
  shippingPrices: Joi.string().optional(),
  shippingServices: Joi.string().optional(),
  zip: Joi.string().optional(),
  UserId: Joi.string().optional(),
  imageUrls: Joi.string().optional(),
  videoUrls: Joi.string().optional(),
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
