import { Router } from 'express';
import {  adminSignUp } from '../controllers/adminSignUp';

const router = Router();

router.post('/admin', adminSignUp);

export default router;