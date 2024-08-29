import express, { Request, Response } from 'express';
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

export default indexRouter;
