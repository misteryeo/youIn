import React from 'react';
import FriendDetailedView from './FriendDetailedView.jsx';

class FriendEventListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    //bind methods here
    this.handleClickListItem = this.handleClickListItem.bind(this);
  }
  //Insert Methods Here
  handleClickListItem() {
    this.setState({clicked: !this.state.clicked});
  }

  render() {

    return (
      <div className="panel list-item " onClick={this.handleClickListItem}>
        <span className="glyphicon glyphicon-globe col-md-1"></span> 
        <span className="col-md-4">{this.props.event.title}</span>
        <span className="col-md-4">{this.props.event.date} at {this.props.event.time}</span>
        <span className="col-md-3">{this.props.event.attendees}<span> people IN</span></span>
        {this.state.clicked ? <FriendDetailedView /> : '' }
        <br/>
      </div>
    );
  }
}

export default FriendEventListItem;


