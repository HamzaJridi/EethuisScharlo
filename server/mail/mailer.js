const nodemailer = require('nodemailer')

nodemailer.sendEmail = ((name, userEmail, subject, content) => {
  "use strict"
  nodemailer.createTestAccount((err, account) => {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      // host: 'smtp.ethereal.email',
      // port: 587,
      // secure: false, // true for 465, false for other ports
      // auth: {
      //   user: account.user, // generated ethereal user
      //   pass: account.pass  // generated ethereal password
      // }
      service: 'gmail',
      auth: {
        user: 'eethuisscharloorders@gmail.com',
        pass: 'EethuisScharloOrders2017'
      }
    });

    // setup email data with unicode symbols
    let from = (name && userEmail) ? `${name} <${userEmail}>` : '"Eethuis Scharlo Orders" <eethuisscharloorders@gmail.com>'
    let mailOptions = {
      from: from, // sender address
      to: 'eethuisscharloorders@gmail.com', // list of receivers
      subject: subject, // Subject line
      // text: 'Hello world?', // plain text body
      html: content // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId)
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))

      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
  });
})

module.exports = nodemailer;
