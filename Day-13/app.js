import express from "express";
import {
  handleRegister,
  handlerLogin,
  renderHomePage,
  renderLoginPage,
  renderRegisterPage,
} from "./controllers/authController.js";
const app = express();
const PORT = 8000;
app.set("view engine", "ejs");
// Handle form data (like traditional HTML forms)
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Handle JSON data (like from React, Vue, Angular, API clients)

app.get("/", renderHomePage);
app.get("/register", renderRegisterPage);
app.post("/register", handleRegister);
// app.get("/users", async (req, res) => {
//   const data = await db.users.findAll();
//   res.json({ data });
// });
app.get("/login", renderLoginPage);
app.post("/login", handlerLogin);
app.use(express.static("public/css/"));
app.listen(PORT, () =>
  console.log(`Project has started at PORT http://localhost:${PORT}`)
);
