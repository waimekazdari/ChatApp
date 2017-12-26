var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongodb = require('mongodb').MongoClient;
module.exports = function() {
  passport.use(new LocalStrategy({

    usernameField: 'username',
    passportField: 'password'
  },
  function(username, password, done) {
    var url = 'mongodb://localhost:27017/AppChat';
    mongodb.connect(url, function(err,db) {
      var collection = db.collection('users')
      collection.findOne({username: username},
        function(err, results) {
          if(results.password===password){
            var user = results;
            done(null, user);
          }else{
            done('bad password', null);
          }
        });
    });
  }
));
};
