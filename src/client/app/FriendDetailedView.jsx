import React from 'react';

class FriendDetailedView extends React.Component {
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
      <div className="col-md-11 col-md-offset-1">
        {this.props.event.description}
        <br/>
        {this.props.event.location}
      </div>
    );
  }
}

export default FriendDetailedView