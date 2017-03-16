'use strict';

var db = require('./config');
var users = require('./data').users;
var events = require('./data').events;
var usersEvents = require('./data').usersEvents;



// iterate over the users array
users.forEach( (user) => {
  db.queryAsync('INSERT into USERS SET ?', user)
});

events.forEach( (event) => {
  db.queryAsync('INSERT into EVENTS SET ?', event)
});

usersEvents.forEach( (userEvent) => {
  db.queryAsync('INSERT into users_events SET ?', userEvent)
}); 


db.queryAsync('SELECT * FROM users')
.then( (result) => {
  let users = result[0];
  users.forEach((user1) => {
    users.forEach((user2) => {
      if (user1.user_id !== user2.user_id){
        db.queryAsync('INSERT into friends SET ?', {user1: user1.user_id, user2: user2.user_id})
      }
    });
  });
});
  // add each to users table
    // add all events to events table
      // add all attendees to userEvents table
        // add all friends to friends table
          // exit script