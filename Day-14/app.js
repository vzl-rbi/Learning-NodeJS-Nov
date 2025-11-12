import express from "express";
import { authRouter } from "./routes/authRoute.js";
import { renderHomePage } from "./controllers/authController.js";
const app = express();
const PORT = 8000;
app.set("view engine", "ejs");
app.use(express.static("public/css/"));
// Handle form data (like traditional HTML forms)
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Handle JSON data (like from React, Vue, Angular, API clients)
app.get("/", renderHomePage);
app.use("/", authRouter);

app.listen(PORT, () =>
  console.log(`Project has started at PORT http://localhost:${PORT}`)
);
