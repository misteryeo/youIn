import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>You In?</h1>
        <button>Create Event</button>
        <br /><br />
        Here is where owner events will go <br/>
        Owner Event List item will go here
        <br /><br />
        Here is where friend events will go <br/>
        Friend Event list item will go here
      </div>
    )
          
  }
}

render(<App/>, document.getElementById('app'));