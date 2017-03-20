import React from 'react';
import OwnerEventListItem from './OwnerEventListItem.jsx'

const OwnerEventList = (props) => (
  <div>
    {props.ownerEventsArr.map(event => <OwnerEventListItem event={event}/>)}  
  </div>
)
export default OwnerEventList;


