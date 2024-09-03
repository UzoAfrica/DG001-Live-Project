import multer from 'multer';
import path from 'path';

// Configure storage options for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Define where to store the files temporarily
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Initialize multer with storage configuration and file type filter
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif|mp4|mkv|mov/; // Allowed file types
    const extname = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = fileTypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb(new Error('Error: Only images and videos are allowed!'));
    }
  },
  limits: { fileSize: 100 * 1024 * 1024 }, // 100 MB size limit
});

export default upload;
