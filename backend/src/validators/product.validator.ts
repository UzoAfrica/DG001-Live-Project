import Joi from 'joi';

export const getSpecificProductSchema = Joi.string().guid().required();
