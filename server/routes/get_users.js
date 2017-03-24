'use strict';

let db = require('../config');

module.exports = function(req, res) {
  console.log('inside get_users');
  db.query('select * from users')
  .then ( (users) => {
    console.log('result from query of users', users)
    res.status(200).json(users);
  })
  .error( (err) => {
    res.status(404).send(err, 'Error in get_users handler function');
  })

}
