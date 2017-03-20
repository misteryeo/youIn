import React from 'react';

class OwnerDetailedView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    //bind methods here

  }
  //insert methods here

  render() {
    const friends = ['Anthony', 'David', 'Nick', 'Gus'];

    return (
      <div className="row list-item">
        <div className="col-md-8 col-md-offset-1">
          <p>{this.props.event.description}</p>
          <p>{this.props.event.location}</p>
          <button>I'm In</button>
          <button>I'm Out</button>
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

export default OwnerDetailedView;