import express from "express";
import {
  handleRegister,
  handlerLogin,
  renderLoginPage,
  renderRegisterPage,
} from "../controllers/authController.js";
export const authRouter = express.Router();
// REST API--yasari nagarne
// // GET routes for rendering pages
// authRouter.get("/", renderHomePage);
// authRouter.get("/register", renderRegisterPage);
// authRouter.get("/login", renderLoginPage);
// // POST routes for form handling
// authRouter.post("/register", handleRegister);
// authRouter.post("/login", handlerLogin);

//Better-alternative RESTFUL APi
authRouter.route("/register").get(renderRegisterPage).post(handleRegister);
authRouter.route("/login").get(renderLoginPage).post(handlerLogin);
