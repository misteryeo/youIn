import React from 'react';
import {render} from 'react-dom';
import FriendsListItem from './FriendsListItem.jsx';
import Modal from 'boron/DropModal';
import $ from 'jquery';

//trying to force a webpack build
class CreateEventButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      what: 'food-drinks',
      where: '',
      date: '',
      time: '',
      min: '',
      invitees: [],
      description: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  showModal () {
    this.refs.modal.show();
  }

  hideModal () {
    this.refs.modal.hide();
  }

  callback (event) {
    console.log(event);
  }

  handleChange (name, event) {
    let newState = {};
    newState[name] = event.target.value;
    this.setState(newState);
  }

  handleSubmit (event) {
    event.preventDefault();
    let eventData = {
      owner: '1',//this is hardcoded - we need to have the owner come from who is logged in.
      title: this.state.title,
      short_desc: this.state.what,
      description: this.state.description,
      location: this.state.where,
      date: this.state.date,
      time: this.state.time,
      attendees: this.state.invitees,
      min: this.state.min
    }
  $.ajax({
    url: '/events123',
    method: 'POST',
    data: JSON.stringify(eventData),
    contentType: 'application/json',
    success: function(data) {
      console.log('data from ajax in CreateEventButton', data);
    },
    error: function(err) {
      console.log('error in ajax request in CreateEventButton', err);
    }
  })
    
  }

  render () {
    return (
      <div>
        <button onClick={this.showModal.bind(this)} className="btn-danger col-md-4 col-md-offset-4">Create Event</button>
        <Modal ref="modal">
          <div className="container-fluid">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="row">
              <div className="col-md-9">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-3">
                      <h4>Give your event a title</h4>
                      <p>Let 'em know what you're doing in 1-3 words</p>
                    </div>
                    <div className="col-md-9">
                      <input 
                        value={this.state.title} 
                        type="text"
                        onChange={this.handleChange.bind(this, 'title')} required/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <h4>Pick an event category</h4>
                    </div>
                    <div className="col-md-9">
                    <select value={this.state.what} onChange={this.handleChange.bind(this, 'what')} required>
                      <option value="food-drinks" >Food/Drinks</option>
                      <option value="indoor-activity">Indoor Activity</option>
                      <option value="outdoor-activity">Outdoor Activity</option>
                      <option value="hangout">Hangout</option>
                      <option value="other">Other</option>
                    </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <h4>Where?</h4>
                    </div>
                    <div className="col-md-9">
                      <input 
                        value={this.state.where}
                        onChange={this.handleChange.bind(this, 'where')}
                        type="text" required/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <h4>When?</h4>
                    </div>
                    <div className="col-md-9">
                      <input 
                        value={this.state.date}
                        onChange={this.handleChange.bind(this, 'date')}
                        type="date" required/>
                      <input 
                      value={this.state.time}
                      onChange={this.handleChange.bind(this, 'time')}
                      type="time" required/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <h4>Minimum friends for this event?</h4>
                    </div>
                    <div className="col-md-9">
                      <input 
                        value={this.state.min}
                        onChange={this.handleChange.bind(this, 'min')}
                        type="text" required/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <h4>Friends</h4>
                {
                  this.props.friends.map( (friend, i) => (
                    <FriendsListItem
                      key={i} 
                      friend={friend}/>
                    )
                  )
                }
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <h4>Description: </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <input
                value={this.state.description}
                onChange={this.handleChange.bind(this, 'description')} 
                type="text" required/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <button type="submit">See Who's In!</button>
              </div>
            </div>
            </form>
          </div>
        </Modal>
      </div>
    )
  }
}

export default CreateEventButton;


                      // <input 
                      //   value={this.state.what}
                      //   onChange={this.handleChange.bind(this, 'what')}
                      //   type="text" />