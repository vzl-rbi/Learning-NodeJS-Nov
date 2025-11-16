import express from "express";
import cookieParser from "cookie-parser";
import { authRouter } from "./routes/authRoute.js";
import { questionRouter } from "./routes/questionRoute.js";
import { renderHomePage } from "./controllers/authController.js";

const app = express();
const PORT = 8000;

// View Engine
app.set("view engine", "ejs");

// Static files
app.use(express.static("public/css/"));

// Parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.get("/", renderHomePage);
app.use("/", authRouter);
app.use("/", questionRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).send("Route not found");
});

// Server
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
