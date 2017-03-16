'use strict';

let users = [
  {
    username: 'abianco3',
    firstname: 'Anthony',
    lastname: 'Bianco',
    email: 'anthony.bianco3@gmail.com'
  },

   {
    username: 'nkbelow',
    firstname: 'Nick',
    lastname: 'Below',
    email: 'nkbelow@gmail.com'
  },

   {
    username: 'david.brodie',
    firstname: 'David',
    lastname: 'Brodie',
    email: 'david.brodie122@gmail.com'
  },
   {
    username: 'augustus',
    firstname: 'Gus',
    lastname: 'Brennan',
    email: 'augustusmb@gmail.com'
  },

   {
    username: 'FredZFred',
    firstname: 'Fred',
    lastname: 'Zirdung',
    email: 'fred@hackreactor.com'
  } 
];
let events = [
  {
    owner: 1,
    title: 'I Wanna Go To The Beach',
    'short_desc': 'Beach Party',
    description: 'Let\'s go to Ocean Beach while the sun is out! BYOB and don\'t joke about sharks, I\'ll kick you out for real.',
    location: 'Ocean Beach, SF, right off the N Judah.',
    date: '2017-03-14',
    time: '05:30:00',
    attendees: 10
  },
  {
    owner: 2,
    title: 'Pig, Beer, and Bocce Ball',
    'short_desc': 'BBQ',
    description: 'Vegan Only; don\'t be a jerk about it.',
    location: '456 Fillmore Street, San Francisco, CA 94117',
    date: '2017-03-14',
    time: '17:45:00',
    attendees: 3
  },
  {
    owner: 5,
    title: 'Moonlight at 8',
    'short_desc': 'Movie',
    description: 'Let\'s go see Moonlight',
    location: 'Downtown AMC Metreon',
    date: '2017-03-14',
    time: '20:00:00',
    attendees: 6
  }
];

let usersEvents = [
  {
    event_id: 1,
    user_id: 2,
    'status': 'pending'
  },
  {
    event_id: 1,
    user_id: 3,
    'status': 'pending'
  },
  {
    event_id: 1,
    user_id: 4,
    'status': 'rejected'
  },
  {
    event_id: 1,
    user_id: 5,
    'status': 'pending'
  },
  {
    event_id: 2,
    user_id: 1,
    'status': 'accepted'
  },
  {
    event_id: 2,
    user_id: 3,
    'status': 'rejected'
  },
  {
    event_id: 2,
    user_id: 4,
    'status': 'accepted'
  },
  {
    event_id: 2,
    user_id: 5,
    'status': 'pending'
  },
  {
    event_id: 3,
    user_id: 1,
    'status': 'rejected'
  },
  {
    event_id: 3,
    user_id: 2,
    'status': 'accepted'
  },
  {
    event_id: 3,
    user_id: 3,
    'status': 'pending'
  },
  {
    event_id: 3,
    user_id: 4,
    'status': 'accepted'
  },
];

module.exports.users = users;
module.exports.events = events;
module.exports.usersEvents = usersEvents;

