import React from 'react';
import EventListItem from './EventListItem.jsx'

const EventList = (props) => (
  <div>
    {props.ownerEventsArr.map(event => <EventListItem event={event}/>)}  
  </div>
)
export default EventList;


