const express = require('express')
const router = express.Router()
const fs = require('fs')
const nodemailer = require('../mail/mailer')

/* GET api listing. */
router.get('/', (req, res) => {
  res.json({data: 'The Node API works'});
});

router.get('/menu', (req, res) => {
  let contents = fs.readFileSync("./server/data/menu.json");
  let jsonContent = JSON.parse(contents);
  res.json({jsonContent});
});

router.post('/order', (req, res) => {
  nodemailer.sendEmail(req.body.customer.name, req.body.customer.email, 'Menu Order', setOrdersContent(req.body))
  res.status(201).send(req.body);
});

function setOrdersContent(content) {
  let emailContent = `
    <div style="padding: 1em">
        <h3 style="color: #ae4553; text-decoration: underline">Customer Informations</h3>
        <p><span style="font-size: 16px; font-weight: bold">Name: </span>${content.customer.name}</p>
        <p><span style="font-size: 16px; font-weight: bold">Address: </span>${content.customer.address}</p>
        <p><span style="font-size: 16px; font-weight: bold">Tel: </span>${content.customer.telephone}</p>
        <p><span style="font-size: 16px; font-weight: bold">Email: </span>${content.customer.email}</p>
        <p><span style="font-size: 16px; font-weight: bold">Comments: </span>${content.customer.comment}</p>
    </div>

    <div style="padding: 1em">
    <h3 style="color: #ae4553;  text-decoration: underline">List Of Orders</h3>
  `
  for (item of content.order) {
    let order = `
      <div style="padding: 1em">
        <p><span style="font-size: 16px; font-weight: bold">Menu: </span>${item.menuItem.name}</p> 
        <p><span style="font-size: 16px; font-weight: bold">Quantity: </span>${item.menuItem.quantity}</p> 
        <p><span style="font-size: 16px; font-weight: bold">Unit Price: </span>€ ${item.menuItem.price}</p> 
        <p><span style="font-size: 16px; font-weight: bold">Total Price: </span>€ ${item.menuItem.totalPrice}</p> 
      </div>
    `
    emailContent += order
  }
  emailContent += ` 
    </div>
    <div>
      <h3 style="text-decoration: underline">
        <span style="color: #ae4553; padding: 1em; text-align: center">Order's Total Price: </span>€ ${content.totalPrice}
      </h3>
    </div>`
  return emailContent
}
module.exports = router;