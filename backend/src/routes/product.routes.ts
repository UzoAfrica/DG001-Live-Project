import { Router, Request, Response, NextFunction } from 'express';
import {
  addProduct,
  getAllProducts,
  getTrendingSales,
  getProductById,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller';
import {
  authenticateToken,
  AuthenticatedRequest,
} from '../middlewares/auth.middleware'; // Ensure this path is correct
import upload from '../config/multer.config'; // Import multer configuration for file upload

const router = Router();

// Type-safe async handler for route handling
const asyncHandler =
  (
    fn: (
      req: AuthenticatedRequest,
      res: Response,
      next: NextFunction
    ) => Promise<any>
  ) =>
  (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req as AuthenticatedRequest, res, next)).catch(next);

// Route to add a new product with video upload
router.post('/add', authenticateToken, upload.single('video'), asyncHandler(addProduct));

// Route to get all products (regular endpoint)
router.get('/', authenticateToken, asyncHandler(getAllProducts));

// Route to get trending sales products with filters and pagination
router.get('/trending', authenticateToken, asyncHandler(getTrendingSales));

// Route to get a product by ID
router.get('/:id', authenticateToken, asyncHandler(getProductById));

// Route to update a product by ID
router.put('/:id', authenticateToken, asyncHandler(updateProduct));

// Route to delete a product by ID
router.delete('/:id', authenticateToken, asyncHandler(deleteProduct));

export default router;
