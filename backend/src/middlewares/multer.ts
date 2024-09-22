import multer from 'multer';
import { Request } from 'express';

const storage = multer.diskStorage({
    filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
  
  const fileFilter = (req: Request, file: Express.Multer.File, cb: (error: Error | null, acceptFile: boolean) => void) => {
   
    const allowedMimeTypes = [
      'image/jpeg',
      'image/png',
      'image/gif',
      'video/mp4',
    ];
  
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true); 
    } else {
      cb(new Error('Invalid file type. Only images and videos are allowed!'), false);
    }
  };
  
  const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
  });


export default upload;





// import multer from 'multer';

// const storage = multer.diskStorage({
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '-' + file.originalname);
//     }
// });
// const upload = multer({storage: storage}

// )
// export default upload;


