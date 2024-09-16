import { Router } from 'express';
import {  adminSignUp, } from '../controllers/adminSignUp';
import { login} from '../controllers/auth.controller'

const router = Router();

router.post('/register', adminSignUp);
router.post('/login', login);

export default router;