import React from 'react';

const OwnerEventListItem = (props) => (

  <div className="panel">
    <span className="glyphicon glyphicon-globe list-item col-md-1"></span> 
    <span className="list-item col-md-4">{props.event.title}</span>
    <span className="list-item col-md-4">{props.event.date} at {props.event.time}</span>
    <span className="list-item col-md-3">{props.event.attendees}<span> people IN</span></span>
    <br/>
  </div>
)

export default OwnerEventListItem;


  