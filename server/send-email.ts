import nodemailer from "nodemailer";

const EMAIL_USER = "colladostechnology@gmail.com";
const EMAIL_PASS = "pumonvxznvwbacbm"; // contraseña sin espacios

// Configura y crea el transporter (sesión SMTP)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// Exporta el transporter para que se use en otro archivo
export default transporter;
