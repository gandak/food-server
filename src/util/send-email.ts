import nodemailer from "nodemailer";

export const sendEmail = async (email: string, token: string) => {
  const mailSecret = process.env.MAIL_SECRET;
  const mail = process.env.MAIL;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: mail,
      pass: mailSecret,
    },
  });

  const mailOption = {
    from: "Nom nom foods",
    to: email,
    subject: "Нууц үг сэргээх",
    html: `<h1>Your password reset link </h1>
           <a href="http://localhost:3000/reset-password?_id=${token}">Click here</a> `,
  };
  await transporter.sendMail({});
};
