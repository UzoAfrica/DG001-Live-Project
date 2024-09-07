import express, { Request, Response } from 'express';
import productRouter from './product.route';
import registerRouter from './register';
import resetRouter from './reset.route';
import shopRouter from './shop.routes';

const indexRouter = express.Router();

/* Home route. */
indexRouter.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Welcome to traidr API 🚀' });
});

/* Reset routes. */
indexRouter.use('/reset', resetRouter);

/* Register routes. */
indexRouter.use('', registerRouter);

/* Product routes. */
indexRouter.use('/products', productRouter);

// Shop Routes
indexRouter.use('/shop', shopRouter);

export default indexRouter;
 