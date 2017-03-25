import React from 'react';
import FriendDetailedView from './FriendDetailedView.jsx';
class FriendEventListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      accepted: false,
      rejected: false
    }
    //bind methods here
    this.handleClickListItem = this.handleClickListItem.bind(this);
  }
  //Insert Methods Here
  handleClickListItem() {
    this.setState({clicked: !this.state.clicked});
  }

  onAcceptClick () {
    this.setState({ accepted: true, rejected: false });
  }

  onRejectClick() {
    this.setState({ accepted: false, rejected: true });

  }

  render() {
    let date = new Date(this.props.event.date);
    let accepted = this.state.accepted === true ? "accepted" : null;
    let rejected = this.state.rejected === true ? "rejected" : null;

    return (
      <div>
      <div className="panel list-item " onClick={this.handleClickListItem}>
        <span className="glyphicon glyphicon-globe col-md-1"></span>
        <span className={`${accepted} ${rejected} col-md-4`}>{this.props.event.title}</span>
        <span className={`${accepted} ${rejected} col-md-4`}>{this.props.event.date} at {this.props.event.time}</span>
        <span className={`${accepted} ${rejected} col-md-3`}>{this.props.event.attendees.length}<span> people IN</span></span>
        <br/>
      </div>
        {this.state.clicked ? <FriendDetailedView
          accessToken={this.props.accessToken}
          onIn={this.onAcceptClick.bind(this)}
          onOut={this.onRejectClick.bind(this)}
          event={this.props.event}/> : '' }
      </div>
    );
  }
}

export default FriendEventListItem;


