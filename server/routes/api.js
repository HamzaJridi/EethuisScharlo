const express = require('express');
const router = express.Router();
const fs = require('fs');

/* GET api listing. */
router.get('/', (req, res) => {
  res.json({data: 'The Node API works'});
});

router.get('/menu', (req, res) => {
  let contents = fs.readFileSync("./server/data/menu.json");
  let jsonContent = JSON.parse(contents);
  res.json({jsonContent});
});

module.exports = router;