import React from 'react';
import OwnerEventList from './OwnerEventList.jsx';
import FriendEventList from './FriendEventList.jsx';
import CreateEventButton from './CreateEventButton.jsx';

const Homepage = (props) => (
  <div>
    <div className="container">
      <div className="page-header">
        <button id="logout">Log out</button>
      </div>
      <CreateEventButton />
      <br /><br />
      <div className='container events'>
        <h2 className='header-inner'> MyEventsList</h2>
        <OwnerEventList  ownerEventsArr={props.ownerEvents}/>
      </div>
        <br /><br />
      <div className='container events'>
        <h2 className='header-inner'> FriendEventList</h2>
        <FriendEventList friendEventsArr={props.friendEvents}/>
      </div>
    </div>
  </div>
)



export default Homepage;