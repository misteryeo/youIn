import React from 'react';

class Facebook extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='container'>
        <div className='page-header'>
        </div>
        <div className="fb-login-button" data-max-rows="1" data-size="xlarge"
        data-show-faces="false" data-auto-logout-link="false">
        </div>
      </div>)
  }
}

export default Facebook;