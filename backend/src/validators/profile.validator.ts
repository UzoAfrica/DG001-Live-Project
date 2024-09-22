import Joi from 'joi';

export const updateProfileSchema = Joi.object({

    firstName: Joi.string().min(4).optional(),
    lastName: Joi.string().min(4).optional(),
    email:    Joi.string().email().optional(),
    gender:   Joi.string().min(4).optional(),
    shopName: Joi.string().min(5).optional(),
    mobileNumber: Joi.number().min(11).optional(),
    address:   Joi.string().min(8).optional()

});