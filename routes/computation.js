var express = require('express');
var router = express.Router();
var x = Math.random();
var y = Math.random();
var val1="Math.hypot( value0, value1) "+ x +"and"+ y +" is "+ Math.hypot(x, y)
var val2="Math.ceil(x) applied to "+ x + " is "+ Math.ceil(x)
var val3= "Math.clz32(x) applied to "+ x + " is "+ Math.clz32(x);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('computation', { title:'Pravalika Kakanoori   ',value1: val1, value2:val2, value3:val3 });
});
module.exports = router;