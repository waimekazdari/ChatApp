var passport = require('passport');

var router = function(app) {
  app.use(password.initialize());
  app.use(passport.session());
  //user is an User Object, and done is a callback
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });
  require('./strategies/local.strategy')();

  return passport;
};

module.exports = router;
