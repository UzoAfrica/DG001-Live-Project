import { Router } from 'express';
import {  adminSignUp } from '../controllers/adminSignUp';

const router = Router();

router.post('/register', adminSignUp);

export default router;