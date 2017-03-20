import React from 'react';

class FaceBook extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div class="fb-login-button" data-max-rows="1" data-size="xlarge" 
      data-show-faces="false" data-auto-logout-link="false">
      </div>)
  }
}

export default FaceBook