import cookieParser from "cookie-parser";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import createError, { HttpError } from "http-errors";
import logger from "morgan";
import indexRouter from "./routes/index.route";

// Initialize app
const app = express();

// Middlewares
app.use(logger((process.env.NODE_ENV as string) || "dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Enable CORS middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: "GET, POST, PUT, HEAD, DELETE",
    optionsSuccessStatus: 200,
  })
);

// Register API entry route
app.use(indexRouter);

// catch 404 and forward to general error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// General error handler
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = (process.env.NODE_ENV as string) === "dev" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ mesage: err.message, data: null });
});

export default app;
