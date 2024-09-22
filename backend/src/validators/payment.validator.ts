import Joi from 'joi';

export const initiatePaymentSchema = Joi.object({
  amount: Joi.number().required(),
  email: Joi.string().email().required(),
  UserId: Joi.string()
    .guid({ version: ['uuidv4'] })
    .required(),
  ProductId: Joi.string()
    .guid({ version: ['uuidv4'] })
    .required(),
  redirectPage: Joi.string().required(),
});

export const verifyPaymentSchema = Joi.string()
  .guid({ version: ['uuidv4'] })
  .required();
