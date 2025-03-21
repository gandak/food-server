import { Request, Response } from "express";
import userModel from "../../models/user.model";
import jwt from "jsonwebtoken";
import { sendEmail } from "../../util/send-email";

export const forgetPassword = async (req: Request, res: Response) => {
  const jwtSecret = process.env.JWT_SECRET;
  try {
    const { email } = req.body;

    if (!email) {
      res.status(401).json({ messsage: "И-мэйл хаяг бүртгэлгүй байна" });
      return;
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      res.status(401).json({ messsage: "Хэрэглэгч олдсонгүй" });
      return;
    }

    const token = jwt.sign({ id: user._id }, jwtSecret!, { expiresIn: "1h" });

    await sendEmail(email, token);

    res.status(200).json({ message: "И-мэйл амжилттай илгээлээ" });
  } catch (error) {
    res.status(500).json({ message: "Алдаа гарлаа", error });
  }
};
