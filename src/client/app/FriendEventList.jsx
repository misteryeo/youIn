import React from 'react';
import FriendEventListItem from './FriendEventListItem.jsx'

const FriendEventList = (props) => (
  <div>
    {props.friendEventsArr.map(event => <FriendEventListItem event={event}/>)}  
  </div>
)
export default FriendEventList;

