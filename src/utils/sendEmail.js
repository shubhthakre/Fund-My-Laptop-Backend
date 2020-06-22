var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'thakres955@gmail.com',
    pass: 'destination'
  }
});

var mailOptions = {
  from: 'thakres955@gmail.com',
  to: 'pratik955@gmail.com',
  subject: 'Sending Email',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
