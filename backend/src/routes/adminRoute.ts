import { Router } from 'express';
import {  adminSignUp, } from '../controllers/adminSignUp';
import { login} from '../controllers/auth.controller'
import { authorizeRole } from '../middlewares/admin';

const router = Router();

router.post('/register', adminSignUp);
router.use('/admin', authorizeRole);
router.post('/login', login);

router.get('/admin/TenantDb', (req, res) => {
    res.status(200).json({ message: 'Access to TenantDb granted' });
  });

export default router;