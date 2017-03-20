import React from 'react';
import {render} from 'react-dom';

class FriendsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false
    }
  }

  render() {
    return (
      <h5 
        className={this.state.isSelected ? "selected" : null}
        onClick={this.props.handleClick}>
        {this.props.friend.firstname}</h5>
    )
  }
}

export default FriendsListItem;
