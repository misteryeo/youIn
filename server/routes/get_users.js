'use strict';

let db = require('../config');

module.exports = function(req, res) {
  console.log('inside get_users');
  res.send('Suuuper inside it.');
}