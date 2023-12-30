import nodemailer from "nodemailer";
const sendMail = () => {
    var mainOptions = {
        from: "alok.yadav6000@gmail.com",
        to:"support@smartserv.io",
        subject: "change password",
        text: "change password",
      };
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        service: process.env.SMTP_SERVICE,
        secure: false,
        auth: {
          user: process.env.GOOGLE_USERNAME,
          pass: process.env.GOOGLE_PASSWORD,
        },
      });
      
      transporter.sendMail(mainOptions, function (err, info) {
        if (err) {
          console.log("mailError", err);
        } else {
          console.log("Message sent: " + info.messageId);
        }
      });
}

export default sendMail;