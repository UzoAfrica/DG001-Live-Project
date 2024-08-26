import express, { Request, Response } from 'express';

const indexRouter = express.Router();

/* Home route. */
indexRouter.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Welcome to traidr API 🚀' });
});

export default indexRouter;
