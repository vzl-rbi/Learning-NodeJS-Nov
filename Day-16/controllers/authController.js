import { db } from "../model/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// import express from "express";
export const renderHomePage = (req, res) => {
  res.render("home.ejs");
};
export const renderRegisterPage = (req, res) => {
  res.render("auth/register");
};
export const renderLoginPage = (req, res) => {
  res.render("auth/login");
};
export const handleRegister = async (req, res) => {
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
};

export const handlerLogin = async (req, res) => {
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
};
