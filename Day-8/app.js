import express from "express";
import db from "./model/index.js";

const app = express();
const PORT = 8000;
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/register", (req, res) => {
  res.render("auth/register");
});
app.get("/login", (req, res) => {
  res.render("auth/login");
});
app.use(express.static("public/css/"));

/*
Testing my Database:
Created a simple route to test if everything works:

app.get("/test-db", async (req, res) => {
  try {
    const users = await db.users.findAll();
    res.json({ message: "Database working!", users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//Then visit http://localhost:8000/test-db to see if it returns data.
//Node.js + Express + Sequelize + MySQL setup is successfully running! 🚀
*/

app.listen(PORT, () =>
  console.log(`Project has started at PORT http://localhost:${PORT}`)
);
