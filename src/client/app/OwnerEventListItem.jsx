import React from 'react';
import OwnerDetailedView from './OwnerDetailedView.jsx';
import moment from 'moment';

class OwnerEventListItem extends React.Component {
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
    if (this.state.clicked) {
      this.props.getEvents(this.props.history, function(result) {
        this.setState({
          ownerEvents: result.ownerEvents,
          friendEvents: result.friendEvents
        });
      });
    }
  }

  render() {
    

    return (
      <div>
      <div className="panel list-item row" onClick={this.handleClickListItem}>  
        <div className="glyphicon glyphicon-globe col-sm-1"></div>
        <div className="col-sm-4">{this.props.event.title}</div>
        <div className="col-sm-4">
          {this.props.event.date.split(',').map((date, i) => (
            <div key={i}><input type="radio"/> {date}</div>
          ))}
        </div>
        <div className="col-sm-3">{this.props.event.attendees.length}<span> people IN</span></div>
        <br/>
      </div>
        <OwnerDetailedView accessToken={this.props.accessToken} event={this.props.event}/>
      </div>
    );
  }
}

export default OwnerEventListItem;


