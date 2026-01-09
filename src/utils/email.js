import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export async function sendContactEmail({ name, email, message }) {
  if (!process.env.SMTP_HOST) {
    console.warn("SMTP not configured, skipping email send");
    return;
  }

  const mail = {
    from: `"${name}" <${email}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New contact from ${name}`,
    text: message,
    html: `<p>${message}</p><p>From: ${name} — ${email}</p>`
  };

  await transporter.sendMail(mail);
}