import { Router } from 'express';
import { signup } from '../controllers/auth.controller';

const registerRouter = Router();

registerRouter.post('/signup', signup);

export default registerRouter;
