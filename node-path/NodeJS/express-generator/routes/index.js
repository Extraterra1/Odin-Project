var express = require('express');
var router = express.Router();
const logger = require('../middleware/logger');

/* GET home page. */
router.get('/', logger, function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
