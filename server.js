const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: "test.rangsmotors.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.post("/send-email", (req, res) => {
  console.log("Received POST request to /send-email");
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: "joy@test.rangsmotors.com",
    to: email,
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Error sending email", details: error.message });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Email sent successfully" });
    }
  });
  
});
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});