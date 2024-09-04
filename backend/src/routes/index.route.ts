import express, { Request, Response } from 'express';
import authMiddleware from '../middlewares/auth.middleware';
import roleMiddleware from '../middlewares/role.middleware';
import loginRouter from './login';
import productRouter from './product.route';
import registerRouter from './register';
import resetRouter from './reset.route';

const indexRouter = express.Router();

/* Home route. */
indexRouter.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Welcome to traidr API 🚀' });
});

/* Reset routes. */
indexRouter.use('/reset', resetRouter);

/* Register routes. */
indexRouter.use('', registerRouter);

/* Login routes. */
indexRouter.use('', loginRouter);

/* Product routes. */
indexRouter.use(
  '/products',
  authMiddleware,
  roleMiddleware(['user']),
  productRouter
);

export default indexRouter;
