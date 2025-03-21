import { forgetPassword } from "../controllers/auth/forget-password.controller";
import { resetPassword } from "../controllers/auth/reset-password.controller";
import { createUser, loginUser } from "../controllers/auth/user.controller";
import express from "express";

const userRoute = express.Router();

userRoute.post("/signup", createUser);
userRoute.post("/login", loginUser);
userRoute.post("/reset-password-request", forgetPassword);
userRoute.post("/reset-password", resetPassword);
// userRoute.get("/verify-reset-password-request", );

export default userRoute;
