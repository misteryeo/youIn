import React from 'react';
import FriendsListItem from './FriendsListItem.jsx';
import Modal from 'boron/DropModal';
import $ from 'jquery';
import InviteeList from './InviteeList.jsx';

class CreateInviteButton extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      inviteeList: [],
      name: '',
      email: '',
      userWantsMoreInvitees: false
    }
    this.showModal = this.showModal.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddMoreInvitees = this.handleAddMoreInvitees.bind(this);
  }

  // componentDidMount () {
  //
  // }

  showModal () {
    this.refs.modal.show();
    $.ajax({
      url: '/invite',
      method: 'GET',
      success: (inviteeList) => {
        this.setState({inviteeList: inviteeList});
        console.log('inviteeList: ' ,this.state.inviteeList);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  hideModal () {
    this.refs.modal.hide();
  }

  handleNameChange (event) {
    this.setState({name: event.target.value});
  }

  handleEmailChange (event) {
    this.setState({email: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    $.ajax({
      url: '/invite',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        name: this.state.name,
        email: this.state.email
      }),
      success: () => {
        console.log('POST request for invite is sending');
        this.hideModal();
        // this.setState({inviteeList: this.state.inviteeList.push({name: this.state.name, email: this.state.email})})
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  handleAddMoreInvitees (event) {
    event.preventDefault();
    this.setState({userWantsMoreInvitees: true});
  }

  render () {
    return (
      <div>
        <button onClick={this.showModal} className="col-md-4 col-md-offset-4">Invite Friends to Join</button>
        <Modal ref="modal">
          <div className="container-fluid">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-md-8">
                  <h3>Invite Your Friends!</h3>
                  <h4>You've already invited:</h4>
                  <InviteeList inviteeList={this.state.inviteeList}/>
                  <h5>Send invite to:</h5>
                  <h6>Name:</h6>
                  <input type="text" onChange={this.handleNameChange} value={this.state.name}/>
                  <h6>Email:</h6>
                  <input type="email" onChange={this.handleEmailChange} value={this.state.email}/>
                  {/* {this.state.userWantsMoreInvitees ?
                    <form>
                      <h6>Name:</h6>
                      <input type="text"/>
                      <h6>Email:</h6>
                      <input type="email"/>
                    </form>
                    : <div></div>
                  } */}
                  <button onClick={this.handleAddMoreInvitees}>+</button>
                  <button>submit</button>
                </div>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    )
  }
}

export default CreateInviteButton;
