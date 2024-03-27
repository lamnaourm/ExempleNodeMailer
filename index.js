import nodemailer from 'nodemailer';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mohammed.lamnaour@gmail.com',
    pass: 'lcfljjzmyokhciuw'
  }
});

var mailOptions = {
  from: 'mohammed.lamnaour@gmail.com',
  to: 'mohammed.lamnaour@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
