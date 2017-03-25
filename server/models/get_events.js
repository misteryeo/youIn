let db = require('../config');

module.exports = (id) => {
  let query = 'SELECT * FROM EVENTS where owner=$1';
  return db.task( (t) => {
    return t.map(query, [2], (event) => {
      console.log(event);
      let query = 'SELECT users.user_id, users.firstname, users.lastname FROM users \
      INNER JOIN users_events ON users_events.current_status = \'accepted\' \
      AND users_events.event_id=$1 AND users.user_id=users_events.user_id';
      console.log(event.event_id);
      return t.many(query, event.event_id)
      .then( (attendees) => {
        event.attendees = attendees;
        return event;
      })
      .catch( (err) => {
        console.log('error in users_events table query', err);
      });
    })
    .catch( (err) => {
      console.log('error in events table query', err);
    }).then(t.batch);
  });
}