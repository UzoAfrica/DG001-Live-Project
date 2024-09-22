import Joi from 'joi';

export const adminSchema = Joi.object({
    name: Joi.string().min(4).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    referralSource: Joi.string().min(5).required()
});