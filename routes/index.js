var express = require('express');
var router = express.Router();
//const url = require('url');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});
/* GET home page. */
//require('../public/javascripts/jquery.min.js');
//require('../public/javascripts/socketIoScript.js');

/*
router.get('/', function(req, res, next) {
  res.render('Login', { title: 'Express' });
});


router.post('/',urlencodedParser,function(req,res) {
  var username;
  username=req.body.name;


    res.render('chat',{rq:req.body});
});

router.get('/session-index', function(req,res,next) {
  //Increment "index" in session
  req.session.index=(req.session.index || 0) + 1;

  // View "session-index.ejs"
  res.render('session-index', {
    "index": req.session.index,
    "sessId": req.sessionID
  });
});
*/

module.exports = router;
