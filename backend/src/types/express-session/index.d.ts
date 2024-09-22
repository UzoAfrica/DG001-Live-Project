import 'express-session';
import { Request } from 'express';
import { FileArray } from 'express-fileupload';

declare module 'express-session' {
  interface SessionData {
    userId?: string;
  }
}

declare global {
  namespace Express {
    interface Request {
      files?: FileArray;
    }
  }
}
