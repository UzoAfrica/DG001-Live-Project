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
  category: Joi.string().optional().messages({
    'string.empty': 'Category cannot be empty.',
  }),
  legalBusinessAddress: Joi.object().optional(),
  securityFeatures: Joi.object().optional(),
  shopAddress: Joi.string().min(10).required().messages({
    'string.empty': 'Shop address cannot be empty.',
    'string.min': 'Shop address should have a minimum length of 10.',
    'any.required': 'Shop address is required.',
  }),
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
