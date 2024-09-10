import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Request, Response } from 'express';
import createError, { HttpError } from 'http-errors';
import logger from 'morgan';
import appEnvironmentVariables from './config/app-environment-variables.config';
import indexRouter from './routes/index.route';
import profileRoute from './routes/profileRoute';
import imageRoute from './routes/imageRoute';
import adminRoute from './routes/adminRoute';


// Initialize app
const app = express();

// Middlewares
app.use(
  logger(
    appEnvironmentVariables.nodeEnvironment === 'production'
      ? 'combined'
      : 'dev'
  )
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Enable CORS middleware
app.use(
  cors({
    origin:
      appEnvironmentVariables.nodeEnvironment === 'production'
        ? 'https://your-production-site.com'
        : 'http://localhost:5173',
    credentials: true,
    methods: 'GET, POST, PUT, HEAD, DELETE',
    optionsSuccessStatus: 200,
  })
);

// Register API entry route
app.use('/api', indexRouter);
app.use('/profile', profileRoute);
app.use('/image', imageRoute);
app.use('/api', adminRoute);

// Catch 404 and forward to general error handler
app.use((req: Request, res: Response, next) => {
  next(createError(404, 'Resource not found'));
});

// General error handler
app.use((err: HttpError, req: Request, res: Response) => {
  // Removed 'next' parameter
  console.error('Error: ', err.message);

  // Set locals, only providing error details in development
  res.locals.message = err.message;
  res.locals.error =
    appEnvironmentVariables.nodeEnvironment === 'dev' ? err : {};

  // Respond with JSON error message
  res.status(err.status || 500).json({
    message: err.message,
    error: appEnvironmentVariables.nodeEnvironment === 'dev' ? err : undefined,
    data: null,
  });
});

export default app;
 