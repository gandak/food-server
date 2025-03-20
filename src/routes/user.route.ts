import { createUser, loginUser } from "../controllers/auth/user.controller";
import express from "express";

const userRoute = express.Router();

userRoute.post("/signup", createUser);
userRoute.post("/login", loginUser);

export default userRoute;
