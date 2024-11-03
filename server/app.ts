import express, { Request, Response, NextFunction } from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import logger from "morgan";

dotenv.config();

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const isProduction = process.env.NODE_ENV === "production";
  res.locals.message = err.message;
  res.locals.error = isProduction ? {} : err;

  res.status(err.status || 500);
  res.json({ message: err.message, error: isProduction ? {} : err });
});

export default app;
