import React from 'react';
// import $ from 'jquery';

class FriendDetailedView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accepted: false,
      rejected: false
    }
    //bind methods here

  }
  //insert methods here

  acceptClick () {
    console.log('BUTTON CLICKED');
    this.setState({ accepted: true, rejected: false });
    this.props.onIn();


  }

  rejectClick () {
    if (this.state.rejected) { this.deleteEvent(); }
    this.setState({ accepted: false, rejected: true });
    this.props.onOut();
  }

  confirmEventAccept () {
    // AJAX request sent to DB, confirming this users attendance
    console.log('Confirmed Accepted Event for User');
  }

  confirmEventReject () {
    // AJAX request sent to DB, confirming this users non-attendance
    console.log('Confirmed Rejected Event for User');

  }

  deleteEvent (event_id) {
    console.log('event DELETED!');
    // AJAX request to delete event from users list in the database
    // $.ajax({
    //   url: '',
    //   method: '',
    //   'content-type': 'application/json',
    //   data: JSON.stringify({
    //     event_id: event_id
    //   }),
    //   success: function() {
    //     console.log('Event Deleted');
    //   },
    //   error: function() {
    //     console.log('Error deleting event');
    //   }
    // })
  }

  render() {
    const friends = ['Anthony', 'David', 'Nick', 'Gus'];

    let inButtonText = this.state.accepted === false ? 'I\'m In' : 'I\'m In!';
    let outButtonText = this.state.rejected === false ? 'I\'m Out' : 'Delete';
    let acceptedId = this.state.accepted === true ? "accept-click" : null;
    let rejectedId = this.state.rejected === true ? "reject-click" : null;



    return (
      <div className="row list-item">
        <div className="col-md-8 col-md-offset-1">
          <p>{this.props.event.description}</p>
          <p>{this.props.event.location}</p>
          <button id={acceptedId} onClick={this.acceptClick.bind(this)}>{inButtonText}</button>
          <button id={rejectedId} onClick={this.rejectClick.bind(this)}>{outButtonText}</button>
        </div>
        <div className="col-md-3">
          <ul>
            {friends.map((friend, i) => <li key={i}>{friend}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default FriendDetailedView;