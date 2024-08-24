import express from "express";

const indexRouter = express.Router();

/* Home route. */
indexRouter.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to traidr API 🚀" });
});

export default indexRouter;
