import React from 'react';
import {render} from 'react-dom';
import OwnerEventList from './OwnerEventList.jsx';
import FriendEventList from './FriendEventList.jsx';
import CreateEventButton from './CreateEventButton.jsx';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
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
    return (
      <div className="container">
        <div className="page-header">
          <button id="logout">Log out</button>
        </div>
        <CreateEventButton />
        <br /><br />
      <div className='container'>
      <h2 className='col-md-4 col-md-offset-4'> MyEventsList</h2>
      </div>
        <OwnerEventList  ownerEventsArr={this.state.ownerEvents}/>
        <br /><br />
        <div className='container'>
          <h2 className='col-md-4 col-md-offset-4'> FriendEventList</h2>
        </div>
          <FriendEventList friendEventsArr={this.state.friendEvents}/>
      </div>
    )

  }
}

render(<App/>, document.getElementById('app'));