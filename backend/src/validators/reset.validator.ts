import Joi from 'joi';

export const generateResetTokenSchema = Joi.object({
  email: Joi.string().email().required(),
});

export const changePasswordSchema = Joi.object({
  password: Joi.string().required(),
  confirmPassword: Joi.string().required(),
});
