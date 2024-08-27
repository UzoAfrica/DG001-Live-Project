import express, { Request, Response } from 'express';
import resetRouter from './reset.route';

const indexRouter = express.Router();

/* Home route. */
indexRouter.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Welcome to traidr API 🚀' });
});

/* Reset routes. */
indexRouter.use('/reset', resetRouter);

export default indexRouter;
