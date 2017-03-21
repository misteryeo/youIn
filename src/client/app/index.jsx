import React from 'react';
import {render} from 'react-dom';
import OwnerEventList from './OwnerEventList.jsx';
import FriendEventList from './FriendEventList.jsx';
import CreateEventButton from './CreateEventButton.jsx';
import Signup from './Signup.jsx';
import Homepage from './Homepage.jsx';
import Facebook from './Facebook.jsx';
import {users as friends} from '../../../server/data.js';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      friends: friends.slice(0, 4),
      loggedIn: false,
      newUser: false,
      ownerEvents: [
        {
          owner: 1,
          title: 'I Wanna Go To The Beach',
          'short_desc': 'Beach Party',
          description: 'Let\'s go to Ocean Beach while the sun is out! BYOB and don\'t joke about sharks, I\'ll kick you out for real.',
          location: 'Ocean Beach, SF, right off the N Judah.',
          date: '2017-03-14',
          time: '05:30:00',
          attendees: 10
        }
      ],
      friendEvents: [
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
      ]
    }
  }

  render () {

      /*return (
        <div className='container'>
          <div className='page-header'>
            </div>
            <Facebook />
            </div>
      )*/

    if (true) {
      return (
        <Facebook />
      )
    } else {
      return (
        <Homepage
        ownerEvents={this.state.ownerEvents}
        friendEvents={this.state.friendEvents}
        friends={this.state.friends}
        />
      )
    }
  }
}

render(<App/>, document.getElementById('app'));