import { Request, Response } from 'express';
import Product from '../database/models/product.model';
import Review from '../database/models/review.model';
import { getSpecificProductSchema } from '../validators/product.validator';
import { addReviewSchema } from '../validators/review.validator';

export const addReview = async (req: Request, res: Response) => {
  // Request parameter validation Error
  const paramValidationResult = getSpecificProductSchema.validate(
    req.params.id
  );
  if (paramValidationResult.error)
    return res.status(400).json({
      message: paramValidationResult.error.details[0].message,
      data: null,
    });

  // Request body validation Error
  const bodyValidationResult = addReviewSchema.validate(req.body);
  if (bodyValidationResult.error)
    return res.status(400).json({
      message: bodyValidationResult.error.details[0].message,
      data: null,
    });

  const { comment, rating } = req.body;
  const productID = req.params.id;
  //   const UserId = req.user.id -- Confirm if Friday did login controller and middleware.
  const UserId = '3acbc539-e657-464c-b663-3b83fe79e9a6';

  try {
    // Check if product does not exist
    const product = await Product.findByPk(productID);
    if (!product) {
      return res.status(404).json({
        message: 'Product not found',
        data: null,
      });
    }
    // Check if user reviewed product
    const existingProductReview = await Review.findOne({
      where: {
        UserId,
        ProductId: product.getDataValue('id'),
      },
    });
    if (existingProductReview) {
      return res.status(400).json({
        message: 'Cannot add another review',
        data: null,
      });
    }

    // Add review
    const addedReview = await Review.create({
      UserId,
      ProductId: product.getDataValue('id'),
      comment,
      rating,
    });
    return res.status(201).json({ message: 'Review added', data: addedReview });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);

      return res.status(500).json({
        message: 'Failed to add review',
        data: null,
      });
    }
  }
};
