'use strict';


let db = require('../config');

module.exports = (req, res) => {
  // console.log(req.user, 'this is req.user');
  // console.log(req.body, 'this is the body');
  let userId = req.user['user_id'];
  // console.log('this is my id', userId);
  let eventId = req.body['eventId'];
  // console.log(eventId, 'this is eventId');
  db.query('UPDATE users_events set current_status = \'accepted\' where event_id =$1 and user_id =$2', [eventId, userId])
  .then((result) => {
    console.log('accepted route success', result);
    res.status(201).send('event accepted');
  })
  .catch((err) => {
    console.log('accepted route error', err);
    res.status(404).send('this was an error');
  });
};