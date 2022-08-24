const nodemailer = require("nodemailer");

export async function sendEmail(users) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: 'cctl etnf davc znac', // generated ethereal password
    },
  });

  await transporter.sendMail({
    from: `Fred Foo 👻 <${process.env.EMAIL_USER}>`, // sender address
    to: 'lmarrero@acceleanation.com', // list of receivers
    subject: "Hello ✔", // Subject line
    html: "<b>Hello world?</b>", // html body
  });
}
