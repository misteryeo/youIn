'use strict';

let express = require('express');
let bodyParser = require('body-parser').json();
let cookieParser = require('cookie-parser');
let session = require('express-session');
let passport = require('./middleware/initPassport');
let path = require('path');
let handler = require('./routes/request_handler');

let port = process.env.PORT || 8080;
let app = express();

app.use(bodyParser);
app.use(cookieParser());
app.use(session( {secret: 'I didn\'t get Inception'}));
app.use(passport.initialize());
app.use(passport.session());


app.use('/', express.static(path.join(__dirname, '../src/client')));

app.get('/events', handler.getEvents);

app.post('/events123', handler.createEvent);

app.get('/test', passport.authenticate('facebook-token'), function(req, res) {
  if (req.user) {
    res.status(200).json(
      { message: 'success',
        user: req.user 
      });
  } else {
    res.status(404).send('login failed');
  }
});

app.get('*', handler.wildCard);


app.listen(port, function() {
  console.log('we are now listening on: ' + port);
});