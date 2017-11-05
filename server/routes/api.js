const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.json({data: 'The Node API works'});
});

module.exports = router;