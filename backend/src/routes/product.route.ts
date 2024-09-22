import { NextFunction, Request, Response, Router } from 'express';
// import upload from '../config/multer.config';
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  getTrendingSales,
  updateProduct,
} from '../controllers/product.controller';
import { addReview, getReviews } from '../controllers/review.controller';
import {
  AuthenticatedRequest,
  authenticateToken,
} from '../middlewares/auth.middleware';

// Obinna's upload
import upload from '../middlewares/multer';

 
const router = Router();
 
// Type-safe async handler for route handling
const asyncHandler =
  (
    fn: (
      req: AuthenticatedRequest,
      res: Response,
      next: NextFunction
    ) => Promise<unknown>
  ) =>
  (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req as AuthenticatedRequest, res, next)).catch(next);
 
// Route to add a new product with image and video upload
router.post(
  '/add-product',
  authenticateToken,
  // upload.fields([
  //   { name: 'image', maxCount: 10 },
  //   { name: 'video', maxCount: 1 },
  // ]),
  upload.single('image'),
  asyncHandler(addProduct)
);
 
// Route to get all products
router.get('/', authenticateToken, asyncHandler(getAllProducts));

 
// Route to get trending sales products with filters and pagination
router.get('/trending', authenticateToken, asyncHandler(getTrendingSales));
 
// Route to get a product by ID (Consolidated into a single route)
router.get('/:id', authenticateToken, asyncHandler(getProductById));
 
// Route to update a product by ID
router.put('/update-products/:id', authenticateToken, asyncHandler(updateProduct));
 
// Route to delete a product by ID
router.delete('/delete-products/:id', authenticateToken, asyncHandler(deleteProduct));
 
// Route to add a review for a product
router.post('/:id/reviews', authenticateToken, asyncHandler(addReview));

// Route to get reviews for a product
router.get('/:id/reviews', authenticateToken, asyncHandler(getReviews));
 
export default router;