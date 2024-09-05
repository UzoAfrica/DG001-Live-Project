import express from 'express';
import { updateProfile, changePassword} from '../controllers/profileController';


const router = express.Router();

router.put('/user/:id', updateProfile);
router.put('/user/:id/change-password', changePassword);

export default router;