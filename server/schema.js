const mysql = require('mysql');

module.exports = (db) => {

  db.queryAsync('CREATE TABLE IF NOT EXISTS events (\
    event_id int auto-increment not null PRIMARY KEY,\
    owner INT NOT NULL,\
    title varChar(50),\
    short_desc varChar(50),\
    description varChar(255),\
    location varChar(255),\
    date DATE(100),\
    time TIME(100),\
    attendees INT)')
  .then(() => {
    return db.queryAsync('CREATE TABLE IF NOT EXISTS users (\
      user_id auto-increment not null PRIMARY KEY,\
      username varChar(50),\
      firstname varChar(50),\
      lastname varChar(50),\
      email varChar(50)');
  })
  .then(() => {

    return db.queryAsync('CREATE TABLE IF NOT EXISTS users_event (\
      event_id int not null,\
      user_id int not null,\
      in? enum("pending", "accepted", "rejected")');
  })
  .then(() => {
    return db.queryAsync('CREATE TABLE IF NOT EXISTS friends (\
      user1 int not null,\
      user2 int not null');
  });
};
