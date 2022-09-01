import { Subject } from "./dictionary";

const path = require('path')
const nodemailer = require("nodemailer");
const hbs = require('nodemailer-express-handlebars');

export async function sendEmail(receivers:Array<String>, subject: Subject, context: any) {

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: 'cctl etnf davc znac', // generated ethereal password
    },
  });
  transporter.use('compile', hbs({
    viewEngine: {
      extName: '.hbs',
      partialDir: path.resolve('./src/common/utils/templates'),
      defaultLayout: false

    },
    viewPath: path.resolve('./src/common/utils/templates'),
    extName: '.hbs'
  }))
  let mailOption = {
    from: `Calendar Uy <${process.env.EMAIL_USER}>`, // sender address
    to: receivers.toString(), // list of receivers
    subject: subject, // Subject line
    template: 'createReserve',
    context: context
  }
  await transporter.sendMail(mailOption, function(err, info){
    if(err){
      console.log('Error', err)
    }
    else{
      console.log('Mensaje enviado')
    }
  });
}
