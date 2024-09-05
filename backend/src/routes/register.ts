import { Router } from 'express';
import { login, signup } from '../controllers/auth.controller';

const registerRouter = Router();

registerRouter.post('/signup', signup);
registerRouter.post('/login', login);

export default registerRouter;