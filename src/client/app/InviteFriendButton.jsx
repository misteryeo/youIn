import React from 'react';
import {render} from 'react-dom';
import Modal from 'boron/DropModal';
import $ from 'jquery';

class InviteFriendButton extends React.Component {
  constructor(props) {
    super(props)
  }

  showModal () {
    this.refs.modal.show();
  }

  hideModal () {
    this.refs.modal.hide();
  }

  inviteUsers() {
    console.log('Invite users method to link onclick')
  }

  render() {
    return(
      <div>
      <div><button onClick={this.showModal.bind(this)}>Invite Friends</button></div>
        <Modal ref="modal">
          <div className="container-fluid">
          <h2>Be awesome - invite your friends</h2>
            <div className="row">
              <div className="col-md-8">
                <h4 className='create'>You know you want to:</h4>
                Name: <input placeholder="Name"/><br />
                Email: <input placeholder="Email"/><br />
                Name: <input placeholder="Name"/><br />
                Email: <input placeholder="Email"/><br />
                Name: <input placeholder="Name"/><br />
                Email: <input placeholder="Email"/><br />
                Name: <input placeholder="Name"/><br />
                Email: <input placeholder="Email"/><br />
                <br />
              </div>
              <div className="col-md-12">
                <button type="submit">Invite!</button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default InviteFriendButton;
