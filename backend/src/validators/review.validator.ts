import Joi from 'joi';

export const addReviewSchema = Joi.object({
  comment: Joi.string().required(),
  rating: Joi.number().min(1).max(5).required(),
});
