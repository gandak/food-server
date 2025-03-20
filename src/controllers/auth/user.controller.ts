import userModel from "../../models/user.model";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const hashedPass = bcrypt.hashSync(password, 10);

    const newUser = await userModel.create({
      email: email,
      password: hashedPass,
    });
    res.status(200).json({ message: "Successfully created user", newUser });
  } catch (error) {
    res.status(500).json({ message: "Error while creating user ", error });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const foundUser = await userModel.findOne({ email: email });

    if (!foundUser) {
      res.status(401).json({ message: "Бүртгэлгүй хэрэглэгч байна" });
      return;
    }

    const isVerified = bcrypt.compareSync(password, foundUser.password);

    isVerified
      ? res.status(200).json({ message: "Successfully login", email })
      : res.status(401).json({ message: "Password not match" });
  } catch (error) {
    res.status(500).json({ message: "Error while loggin in ", error });
  }
};
