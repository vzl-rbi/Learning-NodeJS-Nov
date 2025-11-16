import { questions, users } from "../model/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Pages
export const renderHomePage = async (req, res) => {
  const data = await questions.findAll({
    include: [
      {
        model: users,
      },
    ],
  });
  // console.log(data);
  res.render("home.ejs", { data });
};

export const renderRegisterPage = (req, res) => {
  res.render("auth/register");
};

export const renderLoginPage = (req, res) => {
  res.render("auth/login");
};

// Register
export const handleRegister = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.send("All fields are required.");
  }

  try {
    const exists = await users.findOne({ where: { email } });

    if (exists) {
      return res.send("Email already registered.");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await users.create({
      username,
      email,
      password: hashPassword,
    });

    return res.send("Registration successful!");
  } catch (err) {
    console.error("DB ERROR:", err);
    return res.send("Something went wrong.");
  }
};

// Login
export const handlerLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.send("All fields are required.");
  }

  try {
    const user = await users.findOne({ where: { email } });

    if (!user) {
      return res.send("Invalid credentials.");
    }

    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
      return res.send("Invalid credentials.");
    }

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET || "superweak-secret",
      {
        expiresIn: "30d",
      }
    );

    res.cookie("jwtToken", token, { httpOnly: true });

    return res.send("Login successful.");
  } catch (err) {
    console.error("DB ERROR:", err);
    return res.send("Something went wrong.");
  }
};
