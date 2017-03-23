'use strict';

let db = require('../config');

module.exports = function(req, res) {
  // create a random user as sub for
  // req.session.user.user_id
  let user_id = Math.ceil(Math.random() * 5);

  let event = req.body;
  event.owner = user_id;
  //event.attendees = 10;
  // console.log('inside create_event function', req.body);

  console.log('inside create_event', event);
  // query the database for events
  db.query('INSERT into EVENTS SET ?', event)
  .then( (result) => {
    console.log('result from queryasync', result)
    res.status(201).json(result);
  })
  .error( (err) => {
    res.status(404).send(err, "Invalid user_id, please login");
  });
};
