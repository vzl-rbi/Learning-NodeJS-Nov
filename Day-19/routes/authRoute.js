import express from "express";
import {
  handleForgotPassword,
  handleRegister,
  handlerLogin,
  renderForgotPasswordPage,
  renderLoginPage,
  renderRegisterPage,
  renderVerifyOtpPage,
} from "../controllers/authController.js";
export const authRouter = express.Router();
authRouter.route("/register").get(renderRegisterPage).post(handleRegister);
authRouter.route("/login").get(renderLoginPage).post(handlerLogin);
authRouter
  .route("/forgotPassword")
  .get(renderForgotPasswordPage)
  .post(handleForgotPassword);
authRouter.route("/verifyOtp").get(renderVerifyOtpPage);
