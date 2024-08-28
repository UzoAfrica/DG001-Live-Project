import Joi from 'joi';

export const resendOTPSchema = Joi.object({
  email: Joi.string().email().required(),
});

export const verifyOTPSchema = Joi.object({
  otp: Joi.number().min(6).required(),
});

export const changePasswordSchema = Joi.object({
  password: Joi.string().required(),
  confirmPassword: Joi.string().required(),
});
