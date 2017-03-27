import React from 'react';
import FriendEventListItem from './FriendEventListItem.jsx'

const FriendEventList = (props) => (
  <div className="eventlist container-fluid">
    {props.friendEventsArr.map((event, i) => <FriendEventListItem accessToken={props.accessToken} key={i} event={event} getEvents={props.getEvents}/>)}  
  </div>
)
export default FriendEventList;

