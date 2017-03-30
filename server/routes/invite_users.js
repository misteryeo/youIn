'use strict';

let db = require('../config');

module.exports = function(req, res) {
  let name = req.body.name;
  let email = req.body.email;
  console.log('UserID', req.user.user_id);


  db.query('INSERT into INVITES (name, email) VALUES ($1, $2)', [name, email])
  .then((result) => {
    res.status(201).send('');
  })

}