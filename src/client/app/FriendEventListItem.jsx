import React from 'react';



class FriendEventListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    //bind methods here

  }
  //Insert Methods Here

  render() {

    return (
      <div className="panel list-item ">
        <span className="glyphicon glyphicon-globe col-md-1"></span> 
        <span className="col-md-4">{this.props.event.title}</span>
        <span className="col-md-4">{this.props.event.date} at {this.props.event.time}</span>
        <span className="col-md-3">{this.props.event.attendees}<span> people IN</span></span>
        <br/>
      </div>
    );
  }
}

export default FriendEventListItem;


