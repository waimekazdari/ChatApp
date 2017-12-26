var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('chat');
});
router.get('/test', function(req, res, next) {
  res.render('chatTest');
});
router.get('/test2', function(req, res, next) {
  res.render('chatTest2');
});


module.exports = router;
