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
  // @ts-expect-error: typescript can't implicitly recognize sequelize association mixins.
  const UserId = req.user!.id;

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

    // Get user that made the review
    // @ts-expect-error: typescript can't implicitly recognize sequelize association mixins.
    const user = await addedReview.getUser();
    // Get user's shop
    const userShop = await user.getShop();

    return res.status(201).json({
      message: 'Review added',
      data: {
        ...addedReview.dataValues,
        username: user.getDataValue('name'),
        shopName: userShop ? userShop.getDataValue('name') : null,
      },
    });
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

export const getReviews = async (req: Request, res: Response) => {
  // Request parameter validation Error
  const paramValidationResult = getSpecificProductSchema.validate(
    req.params.id
  );
  if (paramValidationResult.error)
    return res.status(400).json({
      message: paramValidationResult.error.details[0].message,
      data: null,
    });

  const productID = req.params.id;
  // @ts-expect-error: typescript can't implicitly recognize sequelize association mixins.
  const UserId = req.user!.id;

  try {
    // Check if product does not exist
    const product = await Product.findByPk(productID);
    if (!product) {
      return res.status(404).json({
        message: 'Product not found',
        data: null,
      });
    }
    const reviews = await Review.findAll({
      where: {
        ProductId: productID,
      },
    });
    // Handle no reviews for a product
    if (reviews.length === 0) {
      return res.status(200).json({
        message: 'Product has no reviews',
        data: null,
      });
    }

    const reviewsData = await Promise.all(
      reviews.map(async (review) => {
        // @ts-expect-error: typescript can't implicitly recognize sequelize association mixins.
        let user = await review.getUser();
        let userShop = await user.getShop();
        return {
          rating: review.getDataValue('rating'),
          comment: review.getDataValue('comment'),
          username: user.getDataValue('name'),
          shopName: userShop ? userShop.getDataValue('name') : null,
          date: review.getDataValue('createdAt'),
        };
      })
    );
    return res
      .status(200)
      .json({ message: 'Fetched product reviews', data: reviewsData });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return res.status(500).json({
        message: 'Failed to get reviews',
        data: null,
      });
    }
  }
};
