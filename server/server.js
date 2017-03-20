'use strict';

let express = require('express');
let handler = require('./routes/request_handler');
let bodyParser = require('body-parser').json();
let path = require('path');

let app = express();
let port = process.env.PORT || 8080;

app.use(bodyParser);

app.use('/', express.static(path.join(__dirname, '../src/client')));

app.get('/events', handler.getEvents);

app.post('/events', handler.createEvent);

app.listen(port, function() {
  console.log('we are now listening on: ' + port);
});