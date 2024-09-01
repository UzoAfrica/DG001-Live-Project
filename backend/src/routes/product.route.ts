import express from 'express';
import { getSpecificProduct } from '../controllers/product.controller';

const productRouter = express.Router();

// Get specific product
productRouter.get('/:id', getSpecificProduct);

export default productRouter;
