const users = [
  {
    firstname: 'Anthony',
    lastname: 'Bianco'
  },

   {
    firstname: 'Nick',
    lastname: 'Below'
  },

   {
    firstname: 'David',
    lastname: 'Brodie'
  },
   {
    firstname: 'Gus',
    lastname: 'Brennan'
  },

   {
    firstname: 'Fred',
    lastname: 'Zirdung'
  },
];
const events = [
  {
    owner: 1,
    title: 'Beach Party',
    description: 'Let\'s go to Ocean Beach while the sun is out! BYOB and don\'t joke about sharks, I\'ll kick you out for real.',
    location: 'Ocean Beach, SF, right off the N Judah.',
    date: '2017-03-14',
    time: '05:30:00',
    attendees: 10
  },
  {
    owner: 2,
    title: 'BBQ',
    description: 'Vegan Only; don\'t be a jerk about it.',
    location: '456 Fillmore Street, San Francisco, CA 94117',
    date: '2017-03-14',
    time: '17:45:00',
    attendees: 3
  },
  {
    owner: 5,
    title: 'Movie',
    description: 'Let\'s go see Moonlight',
    location: 'Downtown AMC Metreon',
    date: '2017-03-14',
    time: '20:00:00',
    attendees: 6
  }
];

const usersEvents = [
  {
    event: 1,
    user: 2,
    'in?': pending
  },
  {
    event: 1,
    user: 3,
    'in?': pending
  },
  {
    event: 1,
    user: 4,
    'in?': rejected
  },
  {
    event: 1,
    user: 5,
    'in?': pending
  },
  {
    event: 2,
    user: 1,
    'in?': accepted
  },
  {
    event: 2,
    user: 3,
    'in?': rejected
  },
  {
    event: 2,
    user: 4,
    'in?': accepted
  },
  {
    event: 2,
    user: 5,
    'in?': pending
  },
  {
    event: 3,
    user: 1,
    'in?': rejected
  },
  {
    event: 3,
    user: 2,
    'in?': accepted
  },
  {
    event: 3,
    user: 3,
    'in?': pending
  },
  {
    event: 3,
    user: 4,
    'in?': accepted
  },
];

