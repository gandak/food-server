import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const resetPassword = (req: Request, res: Response) => {
  const jwtSecret = process.env.JWT_SECRET;

  try {
    const { password, token } = req.body;

    if (!token) {
      res.status(400).json({ message: "Token not found" });
    }

    // const decoded = jwt.verify(token, jwtSecret);
  } catch (error) {}
};
