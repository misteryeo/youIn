import React from 'react';
import {render} from 'react-dom';
import Modal from 'boron/DropModal';
import $ from 'jquery';

class InviteFriendButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      name: '',
      email: ''
    }
    this.inviteUsers = this.inviteUsers.bind(this);
  }

  showModal () {
    this.refs.modal.show();
  }

  hideModal () {
    this.refs.modal.hide();
  }

  handleChange(input, event) {
    var newUser = {};
    newUser[input] = event.target.value,
    this.setState(newUser)
  }

  inviteUsers(event) {
    let context = this;
    var newUser = {
      name: this.state.name,
      email: this.state.email
    }
    console.log('New User', newUser)
    $.ajax({
      url: '/inviteUsers',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(newUser),
      success: function(data) {
        console.log('Invite success', data)
        context.hideModal();
      },
      error: function(error) {
        console.error('Error', error)
      }
    })
  }

  render() {
    return(
      <div>
      <div><button onClick={this.showModal.bind(this)} id="create_event" className="col-md-4 col-md-offset-4">Invite Friends</button></div>
        <Modal ref="modal">
          <div className="container-fluid">
          <h2>Be awesome - invite your friends</h2>
            <div className="row">
              <div className="col-md-8">
                <h4 className='create'>You know you want to:</h4>
                Name: <input placeholder="Name" value={this.state.name} onChange={this.handleChange.bind(this, 'name')}/><br />
                Email: <input placeholder="Email" value={this.state.email} onChange={this.handleChange.bind(this, 'email')}/><br />
                <br />
              </div>
              <div className="col-md-12">
                <button type="submit" onClick={this.inviteUsers}>Invite!</button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default InviteFriendButton;
