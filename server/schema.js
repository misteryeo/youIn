const mysql = require('mysql');
const Promise = require('bluebird');

module.exports = (db) => {

  if (!db.queryAsync) {
    db = Promise.promisifyAll(db);
  }

  return db.queryAsync('CREATE TABLE IF NOT EXISTS events (\
    event_id int auto_increment not null PRIMARY KEY,\
    owner INT NOT NULL,\
    title varChar(50),\
    short_desc varChar(50),\
    description varChar(255),\
    location varChar(255),\
    date DATE,\
    time TIME,\
    attendees INT);')
  .then(() => {
    return db.queryAsync('CREATE TABLE IF NOT EXISTS users (\
      user_id INT auto_increment not null PRIMARY KEY,\
      username varChar(50),\
      firstname varChar(50),\
      lastname varChar(50),\
      email varChar(50));')
  })
  .then(() => {

    return db.queryAsync('CREATE TABLE IF NOT EXISTS users_events (\
      event_id int not null,\
      user_id int not null,\
      status enum(\'pending\', \'accepted\', \'rejected\'));')
  })
  .then(() => {
    return db.queryAsync('CREATE TABLE IF NOT EXISTS friends (\
      user1 int not null,\
      user2 int not null);')
  });
};
