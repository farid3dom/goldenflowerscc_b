const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/send-mail", async (req, res) => {
   const { fullName, email, message } = req.body;

   try {
      let transporter = nodemailer.createTransport({
         host: "smtp.gmail.com",
         port: 465,
         secure: true,
         auth: {
            user: "goldenflowerscc@gmail.com",
            pass: "otvw wdkc bxce mwhc"
         }
      });

      let emailText = '';
      emailText += `Full Name: ${fullName},\n`;
      emailText += `Email: ${email},\n`;
      emailText += `Message: ${message},\n`;

      let info = await transporter.sendMail({
         from: "goldenflowerscc@gmail.com",
         to: "info@gfcc.ru",
         subject: 'Golden Flowers Cash&Carry Offer',
         text: emailText
      });

      console.log('Email sent: ', info.messageId);
      res.status(200).json({ message: 'Email sent successfully' });

   } catch (error) {
      console.error('Error sending email: ', error);
      res.status(500).json({ message: 'Failed to send email', error: error.message });
   }
})

module.exports = router;