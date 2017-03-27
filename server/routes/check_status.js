'use strict';

let db = require('../config');

module.exports = function (req, res) {

  let eventId = req.body.eventId;
  let userId = req.user.user_id;

  db.one('SELECT * FROM users_events WHERE user_id=$1 and event_id=$2', [userId, eventId])
    .then( (data) => {
      res.status(201).send(data);
    })
    .catch( (err) => {
      res.status(404).send('ERROR: ', err);
    })
}