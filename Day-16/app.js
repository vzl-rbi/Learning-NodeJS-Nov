import express from "express";
import { authRouter } from "./routes/authRoute.js";
import { renderHomePage } from "./controllers/authController.js";
import { questionRouter } from "./routes/questionRoute.js";
import cookieParser from "cookie-parser";
const app = express();
const PORT = 8000;
app.set("view engine", "ejs");
app.use(express.static("public/css/"));
// Handle form data (like traditional HTML forms)
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Handle JSON data (like from React, Vue, Angular, API clients)
app.use(cookieParser());
app.get("/", renderHomePage);
app.use("/", authRouter);
app.use("/", questionRouter);

app.listen(PORT, () =>
  console.log(`Project has started at PORT http://localhost:${PORT}`)
);
