import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";

// Routes
import projectRoutes from "./routes/projectRoutes";
import taskRoutes from "./routes/taskRoutes";
import searchRoutes from "./routes/searchRoutes";
import userRoutes from "./routes/userRoutes";
import teamRoutes from "./routes/teamRoutes";

// Configuration
dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes)
app.use("/search", searchRoutes);
app.use("/users", userRoutes);
app.use("/teams", teamRoutes);

// Server 
const PORT = Number(process.env.PORT) || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}.`);
});


app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const isProduction = process.env.NODE_ENV === "production";
  res.locals.message = err.message;
  res.locals.error = isProduction ? {} : err;

  res.status(err.status || 500);
  res.json({ message: err.message, error: isProduction ? {} : err });
});

export default app;