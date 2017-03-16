'use strict';

let db = require('../config');

module.exports = function(req, res) {
  // create a random user as sub for
  // req.session.user.user_id

  let user_id = Math.ceil(Math.random() * 5);

  let event = req.body;
  event.owner = user_id;

  console.log(event);
  // query the database for events
  db.queryAsync('INSERT into EVENTS SET ?', event)
  .then( (result) => {
    res.status(201).json(result);
  })
  .error( (err) => {
    res.status(404).send(err, "Invalid user_id, please login");
  });
};