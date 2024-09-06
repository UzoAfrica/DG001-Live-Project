import { Router } from 'express';
import { login } from '../controllers/auth.controller';

const loginRouter = Router();

loginRouter.post('/login', login);

export default loginRouter;
