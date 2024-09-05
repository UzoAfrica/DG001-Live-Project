import { updateImage, uploadImage} from '../controllers/imageController'
import upload from '../middlewares/multer';
import express from 'express';


const router = express.Router();

router.put('/user/:id/profile-image',upload.single('image'), updateImage);
router.post('/user', upload.single('image'), uploadImage)

export default router;