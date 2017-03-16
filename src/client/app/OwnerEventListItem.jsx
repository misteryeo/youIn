import React from 'react';

const OwnerEventListItem = (props) => (

  <div className="container">
    <div className="col-md-2">
      <img height="50%" width="50%" className="img-thumbnail" src="http://vignette2.wikia.nocookie.net/micronationalss/images/0/0d/Ilesa.png/revision/latest?cb=20150909153602"/>
    </div>
    <div className="col-md-5" >
      {props.event.short_desc}
    </div>
    <div className="col-md-5">
      <b>{props.event.attendees}</b> Friends IN
    </div>
    <div className="col-md-5">
      {props.event.time}
    </div>
    <div className="col-md-5">
      {props.event.location}
    </div>

  </div>
)

export default OwnerEventListItem;


  