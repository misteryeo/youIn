import React from 'react';
import {render} from 'react-dom';
import EventList from './EventList.jsx';

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render () {
    return (
      <div>
        <h1>You In?</h1>
        <button>Create Event</button>
        <br /><br />
        Here is where owner events will go <br/>
         Owner's Events: <br/>
        <EventList />

        <br /><br />
        Here is where friend events will go <br/>
        Friend's Events: <br/>
        <EventList />
      </div>
    )
          
  }
}

render(<App/>, document.getElementById('app'));