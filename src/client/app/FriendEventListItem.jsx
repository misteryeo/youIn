import React from 'react';

const FriendEventListItem = (props) => (

  <div className="panel list-item ">
    <span className="glyphicon glyphicon-globe col-md-1"></span> 
    <span className="col-md-4">{props.event.title}</span>
    <span className="col-md-4">{props.event.date} at {props.event.time}</span>
    <span className="col-md-3">{props.event.attendees}<span> people IN</span></span>
    <br/>
  </div>
)

export default FriendEventListItem;


