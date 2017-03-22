let config = require('./authConfig');
let passport = require('passport');
let FacebookTokenStrategy = require('passport-facebook-token');
let db = require('../config.js');

passport.use(new FacebookTokenStrategy({
  clientID: config.facebookAuth.clientId,
  clientSecret: config.facebookAuth.clientSecret
}, function(accessToken, refreshToken, profile, done) {
  let id = profile.id;
  db.queryAsync('SELECT * FROM users WHERE user_id = ?', [id])
    .then((user) => {
      if (user[0].length > 0) {
        done(null, user[0]);
      } else {
        let user = {
          user_id: +profile.id,
          token: accessToken,
          username: profile.username,
          firstname: profile.name.givenName,
          lastname: profile.name.familyName,
          email: (profile.emails[0].value || '').toLowerCase()
        };

        db.queryAsync('INSERT INTO users SET ?', user)
          .then( (result) => {
            db.queryAsync('SELECT * FROM users WHERE user_id = ?', [user.user_id])
              .then( (user) => {
                 done(null, user[0]);
              })
          })
          .error( (err) => {
            done(err, false, {message: 'Facebook authorization failed'});
          })
        }
    })
    .error( (err) => {
    })
    .catch( (err) => {
      console.log('it fails in catch')
      done(err, null);
    });
  }
));

passport.serializeUser(function(user, done){
    done(null, user.user_id);
});

passport.deserializeUser(function(id, done){
    db.queryAsync('SELECT * FROM users WHERE user_id = ?', [id])
    .then( (user) => {
      done(null, user[0])
    })
});

module.exports = passport;