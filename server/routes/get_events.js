'use strict'

let db = require('../config.js');

//query database to get all events

module.exports = (req, res) => {
  db.queryAsync('SELECT * from events')
  .then( (events) => {
    let results = events[0];
    res.status(200).json(results);
  })
  .error( (error) => {
    res.status(404).send(error, 'failed to get events, please try again');
  });
};
