'use strict';

let users = [
  {
    user_id: 1,
    token: 1234,
    firstname: 'Anthony',
    lastname: 'Bianco',
    photoUrl: 'anthonyurl',
    email: 'anthony.bianco3@gmail.com'
  },

  {
    user_id: 2,
    token: 12345,
    firstname: 'Nick',
    lastname: 'Below',
    photoUrl: 'nickurl',
    email: 'nkbelow@gmail.com'
  },

  {
    user_id: 3,
    token: 12346,
    firstname: 'David',
    lastname: 'Brodie',
    photoUrl: 'davidurl',
    email: 'david.brodie122@gmail.com'
  },
  {
    user_id: 4,
    token: 12344,
    firstname: 'Gus',
    lastname: 'Brennan',
    photoUrl: 'gusurl',
    email: 'augustusmb@gmail.com'
  },

  {
    user_id: 5,
    token: 123467,
    firstname: 'Fred',
    lastname: 'Zirdung',
    photoUrl: 'fredurl',
    email: 'fred@hackreactor.com'
  } 
];
let events = [
  {
    event_id: 123,
    owner: 1,
    title: 'I Wanna Go To The Beach',
    'short_desc': 'Beach Party',
    description: 'Let\'s go to Ocean Beach while the sun is out! BYOB and don\'t joke about sharks, I\'ll kick you out for real.',
    location: 'Ocean Beach, SF, right off the N Judah.',
    date: '2017-03-14',
    time: '05:30:00',
    attendees: 10,
    min: 5
  },
  {
    event_id: 124,
    owner: 2,
    title: 'Pig, Beer, and Bocce Ball',
    'short_desc': 'BBQ',
    description: 'Vegan Only; don\'t be a jerk about it.',
    location: '456 Fillmore Street, San Francisco, CA 94117',
    date: '2017-03-14',
    time: '17:45:00',
    attendees: 3,
    min: 15
  },
  {
    event_id: 125,
    owner: 5,
    title: 'Moonlight at 8',
    'short_desc': 'Movie',
    description: 'Let\'s go see Moonlight',
    location: 'Downtown AMC Metreon',
    date: '2017-03-14',
    time: '20:00:00',
    attendees: 6,
    min: 5
  }
];

let usersEvents = [
  {
    event_id: 1,
    user_id: 2,
    'current_status': 'pending'
  },
  {
    event_id: 1,
    user_id: 3,
    'current_status': 'pending'
  },
  {
    event_id: 1,
    user_id: 4,
    'current_status': 'rejected'
  },
  {
    event_id: 1,
    user_id: 5,
    'current_status': 'pending'
  },
  {
    event_id: 2,
    user_id: 1,
    'current_status': 'accepted'
  },
  {
    event_id: 2,
    user_id: 3,
    'current_status': 'rejected'
  },
  {
    event_id: 2,
    user_id: 4,
    'current_status': 'accepted'
  },
  {
    event_id: 2,
    user_id: 5,
    'current_status': 'pending'
  },
  {
    event_id: 3,
    user_id: 1,
    'current_status': 'rejected'
  },
  {
    event_id: 3,
    user_id: 2,
    'current_status': 'accepted'
  },
  {
    event_id: 3,
    user_id: 3,
    'current_status': 'pending'
  },
  {
    event_id: 3,
    user_id: 4,
    'current_status': 'accepted'
  },
];

module.exports.users = users;
module.exports.events = events;
module.exports.usersEvents = usersEvents;

