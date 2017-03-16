'use strict';

let express = require('express');
let handler = require('./routes/request_handler');
let bodyParser = require('body-parser').json();

let app = express();
let port = process.env.PORT || 8080;

app.use(bodyParser);

app.get('/', function(req, res) {
  res.send('this is a get route');
});

app.get('/events', handler.getEvents);

app.post('/events', handler.createEvent);

app.listen(port, function() {
  console.log('we are now listening on: ' + port);
});