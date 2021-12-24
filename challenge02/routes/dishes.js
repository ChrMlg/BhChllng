var express = require('express');
var router = express.Router();
const {getDish,postDish} = require('../controller/dishController');
/* GET users listing. */
router.get('/show',getDish);

router.post('/post',postDish)

module.exports = router;
