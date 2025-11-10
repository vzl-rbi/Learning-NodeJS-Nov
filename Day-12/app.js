import express from "express";
import { db } from "./model/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const app = express();
const PORT = 8000;
app.set("view engine", "ejs");
// Handle form data (like traditional HTML forms)
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Handle JSON data (like from React, Vue, Angular, API clients)

app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/register", (req, res) => {
  res.render("auth/register");
});
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.send("Please provide email, password, email!!");
  }
  // const data = await db.users.findAll({
  //   where: {
  //     email: email,
  //   },
  // });
  // if (data.length > 0) {
  //   res.send("Already registred Email");
  // }
  // const hashPassword = await bcrypt.hash(password, 10);
  await db.users.create({
    username,
    email,
    password: bcrypt.hashSync(password, 10), // password: hashPassword,
  });
  res.send("Registed sucessfully!!");
});
// app.get("/users", async (req, res) => {
//   const data = await db.users.findAll();
//   res.json({ data });
// });
app.get("/login", (req, res) => {
  res.render("auth/login");
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.send("All fields are required");
  }

  const [users] = await db.users.findAll({
    where: {
      email: email,
    },
  });
  if (users) {
    const isMatched = await bcrypt.compare(password, users.password);
    if (isMatched) {
      const token = jwt.sign({ id: users.id }, "Hahaha", { expiresIn: "30d" });
      // console.log(token);
      res.cookie("jwtToken", token);
      res.send("Login sucess");
    } else {
      res.send("Invalid Email and password!!");
    }
  } else {
    res.send("Invalid Credentials!!");
  }
});

app.use(express.static("public/css/"));
app.listen(PORT, () =>
  console.log(`Project has started at PORT http://localhost:${PORT}`)
);
