import { Router } from 'express';
import { login, signup } from '../controllers/auth.controller';
import { isAdmin } from '../middlewares/admin';

const registerRouter = Router();

registerRouter.post('/signup', signup);
registerRouter.post('/login', isAdmin, login);

export default registerRouter;