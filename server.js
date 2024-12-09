process.env.NODE_ENV = process.env.NODE_ENV || "development";
var express = require("./config/express");
var app = express();
app.listen(8080);
module.exports = app;

console.log("Server running at http://localhost:8080/");




// var express = require("./config/express");


// process.env.NODE_ENV = process.env.NODE_ENV || "development";


// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const app = express();

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.set('view engine', 'ejs');

// // Route for the contact form
// app.get('/', (req, res) => {
//   res.render('index');
// });

// // Handle form submission
// app.post('/send-email', async (req, res) => {


//   const { firstname, emailaddress, message } = req.body;


//   try {
//     // Configure Nodemailer
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'portfolioprojectchadan@gmail.com', // Replace with your Gmail address
//         pass: 'okmxmpvshaoebnlt', // Replace with your Gmail App Password
//       },
//     });

//     const mailOptions = {
//       from: emailaddress,
//       to: 'portfolioprojectchadan@gmail.com', // Email where you want to receive messages
//       subject: `Message from ${firstname}`,
//       text: message,
//     };

//     // Send the email
//     await transporter.sendMail(mailOptions);
//     res.render('result');
//   } catch (error) {
//     console.error(error);
//     res.send('Error sending email.');
//   }
// });









// app.listen(8080);
// module.exports = app;

// console.log("Server running at http://localhost:8080/");
