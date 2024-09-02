import express from 'express';
import { getSpecificProduct } from '../controllers/product.controller';
import { addReview } from '../controllers/review.controller';

const productRouter = express.Router();

// Get specific product
productRouter.get('/:id', getSpecificProduct);

// Add review for product
productRouter.post('/:id/reviews', addReview);

export default productRouter;
