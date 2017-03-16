'use strict';

const Promise = require('bluebird');
const mysql = require('mysql');
const makeSchema = require('./schema.js');
const database = 'youin';

let connection = mysql.createConnection({
    user: 'root',
    password: '',
    database: 'youin'
});

let db = Promise.promisifyAll(connection, {multiArgs: true});

db.connectAsync().then(() => {
  console.log('You are connect to database' + database);
  return db.queryAsync('CREATE DATABASE IF NOT EXISTS ' + database);
}).then(() => {
  return db.queryAsync('USE ' + database);
}).then(() => {
  return makeSchema(db);
});

module.exports = db;
