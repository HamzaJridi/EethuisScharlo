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
  nodemailer.sendEmail(req.body.customer.name, req.body.customer.email, 'Nieuwe order', setOrdersContent(req.body))
  res.status(201).send(req.body);
});

function setOrdersContent(content) {
  let emailContent = `
    <div style="padding: 1em">
        <h3 style="color: #ae4553; text-decoration: underline">Klant informatie</h3>
        <p><span style="font-size: 16px; font-weight: bold">Naam: </span>${content.customer.name}</p>
        <p><span style="font-size: 16px; font-weight: bold">Adres: </span>${content.customer.address}</p>
        <p><span style="font-size: 16px; font-weight: bold">telefoon: </span>${content.customer.telephone}</p>
        <p><span style="font-size: 16px; font-weight: bold">Email: </span>${content.customer.email}</p>
        <p><span style="font-size: 16px; font-weight: bold">Bericht: </span>${content.customer.comment}</p>
    </div>

    <div style="padding: 1em">
    <h3 style="color: #ae4553;  text-decoration: underline">Bestel Details</h3>
  `
  for (item of content.order) {
    let order = `
      <div style="padding: 1em">
        <p><span style="font-size: 16px; font-weight: bold">Artikel: </span>${item.menuItem.name}</p> 
        <p><span style="font-size: 16px; font-weight: bold">Aantal: </span>${item.menuItem.quantity}</p> 
        <p><span style="font-size: 16px; font-weight: bold">Stukprijs: </span>€ ${item.menuItem.price}</p> 
        <p><span style="font-size: 16px; font-weight: bold">Totaal artikelprijs: </span>€ ${item.menuItem.totalPrice}</p> 
      </div>
    `
    emailContent += order
  }
  emailContent += ` 
    </div>
    <div>
      <h3 style="text-decoration: underline">
        <span style="color: #ae4553; padding: 1em; text-align: center">Totale orderprijs: </span>€ ${content.totalPrice}
      </h3>
    </div>`
  return emailContent
}
module.exports = router;