import multer from 'multer';
import path from 'path';
import { Request } from 'express';

// Configure storage options for multer
const storage = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
    cb(null, 'uploads/'); // Define where to store the files temporarily
  },
  filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Define the file filter callback type explicitly
type FileFilterCallback = (error: Error | null, acceptFile: boolean) => void;

// Initialize multer with storage configuration and file type filter
const upload = multer({
  storage,
  fileFilter: (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    const fileTypes = /jpeg|jpg|png|gif|mp4|mkv|mov/; // Allowed file types
    const extname = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = fileTypes.test(file.mimetype);

    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Error: Only images and videos are allowed!'), false);
    }
  },
  limits: { fileSize: 100 * 1024 * 1024 }, // 100 MB size limit
});

export default upload;
