import React from 'react';
import {render} from 'react-dom';
import Modal from 'boron/dropModal';

class CreateEventButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
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

  render () {
    return (
      <div>
        <button onClick={this.showModal.bind(this)} className="btn-danger col-md-4 col-md-offset-4">Create Event</button>
        <Modal ref="modal">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-9">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-3">
                      <h4>Title</h4>
                    </div>
                    <div className="col-md-9">
                      <input type="text" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <h4>What?</h4>
                    </div>
                    <div className="col-md-9">
                      <input type="text" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <h4>Where?</h4>
                    </div>
                    <div className="col-md-9">
                      <input type="text" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <h4>When?</h4>
                    </div>
                    <div className="col-md-9">
                      <input type="text" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <h4>Min?</h4>
                    </div>
                    <div className="col-md-9">
                      <input type="text" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <h4>Friends</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <h4>Description: </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <input type="text" />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default CreateEventButton;