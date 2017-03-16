var db = require('./config');
var users = require('./data').users;
var events = require('./data').events;
var userEvents = require('./data').userEvents;
// iterate over the users array
users.forEach( (user) => {
  db.queryAsync('INSERT into USERS SET ?', [user.username, user.firstname, user.lastname, user.email])
  .then( () => {
    events
  })
})
  // add each to users table
    // add all events to events table
      // add all attendees to userEvents table
        // add all friends to friends table
          // exit script