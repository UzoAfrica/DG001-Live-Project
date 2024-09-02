import { Router } from 'express';
import { createShop, updateShop, deleteShop } from '../controllers/shop.controller';
import authenticateUser from '../middlewares/auth.middleware';
import upload from '../utils/upload'; // Import upload middleware

const router = Router();

// Route to create a shop with file upload
router.post('/shops', authenticateUser as any, upload.fields([{ name: 'videos', maxCount: 5 }, { name: 'images', maxCount: 5 }]), createShop);

// Route to update a shop with file upload
router.put('/shops/:id', authenticateUser as any, upload.fields([{ name: 'videos', maxCount: 5 }, { name: 'images', maxCount: 5 }]), updateShop);

// Route to delete a shop
router.delete('/shops/:id', authenticateUser as any, deleteShop);


export default router;
