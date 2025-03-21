import nodemailer from "nodemailer";

export const sendEmail = async (email: string, token: string) => {
  const mailSecret = process.env.MAIL_SECRET;
  const mail = process.env.MAIL;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, // Port
    secure: true, // this is true as port is 465
    auth: {
      user: mail,
      pass: mailSecret,
    },
  });

  const mailOption = {
    from: "Nom nom foods",
    to: email,
    subject: "Нууц үг сэргээх",
    html: `
        <h2>Нууц үгээ сэргээхийн тулд доорх холбоос дээр дарна уу</h2>
        <a href="http://localhost:3000/reset-password?id=${token}">click here</a>
    `,
  };
  await transporter.sendMail(mailOption);
};
