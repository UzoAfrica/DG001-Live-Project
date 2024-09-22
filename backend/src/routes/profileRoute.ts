import express from 'express';
import { updateProfile, changePassword} from '../controllers/profileController';
import upload from '../middlewares/multer';

const router = express.Router();

router.put('/user/:id', upload.single('image'), updateProfile);
router.put('/user/:id/change-password', changePassword);

export default router;