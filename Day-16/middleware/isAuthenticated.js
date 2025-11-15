import { promisify } from "util";
import jwt from "jsonwebtoken";
import { db } from "../model/index.js";
export const isAuthenticated = async (req, res, next) => {
  const token = req.cookies.jwtToken;
  console.log("Tokent", token);
  if (!token) {
    return res.redirect("/login");
  }
  const decryptedResult = await promisify(jwt.verify)(token, "Hahaha");
  console.log(decryptedResult);
  const data = await db.users.findByPk(decryptedResult.id);
  if (!data) {
    return res.send("No user belong to that id");
  }
  req.userId = decryptedResult.id;
  next();
};
