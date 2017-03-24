import React from 'react';
import FriendEventListItem from './FriendEventListItem.jsx'

const FriendEventList = (props) => (
  <div>
    {props.friendEventsArr.map((event, i) => <FriendEventListItem accessToken={props.accessToken} key={i} event={event}/>)}  
  </div>
)
export default FriendEventList;

