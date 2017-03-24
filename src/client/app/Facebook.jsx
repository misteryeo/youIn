import React from 'react';
import {BrowserRouter, history, Link} from 'react-router-dom';
import { ajaxSetup } from 'jquery';
console.log(window.location);
class Facebook extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
  window.fbAsyncInit = function() {
    FB.init({
      appId      : window.location.host === 'localhost:8080' ? '1286128124802062' : '414888392204388',
      cookie     : true,  // enable cookies to allow the server to access
                        // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.1' // use version 2.1
    });

    // Now that we've initialized the JavaScript SDK, we call
    // FB.getLoginStatus().  This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide.  They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    //
    // These three cases are handled in the callback function.
    FB.getLoginStatus(function(response) {
      this.statusChangeCallback(response);
    }.bind(this));
  }.bind(this);

  // Load the SDK asynchronously
  //I moved this to be in the index.html so that it would function
  
}

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
testAPI() {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
  console.log('Successful login for: ' + response.name);
  document.getElementById('status').innerHTML =
    'Thanks for logging in, ' + response.name + '!';
  });
}

// This is called with the results from from FB.getLoginStatus().
statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    this.testAPI();

    ajaxSetup({
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + response.authResponse.accessToken)
      }
    })
    // console.log(response.authResponse.accessToken, 'this is the access token');
    this.props.setToken(response.authResponse.accessToken);
    this.props.history.push('/homepage');

  } else if (response.status === 'not_authorized') {
    // The person is logged into Facebook, but not your app.
    // document.getElementById('status').innerHTML = 'Please log ' +
    //   'into this app.';
  } else {
    // The person is not logged into Facebook, so we're not sure if
    // they are logged into this app or not.
    // document.getElementById('status').innerHTML = 'Please log ' +
    // 'into Facebook.';
  }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
checkLoginState() {
  FB.getLoginStatus(function(response) {
    this.statusChangeCallback(response);
  }.bind(this));
}

handleClick() {
  FB.login(this.statusChangeCallback.bind(this), {scope: 'public_profile, email'});
}
  render() {
    return (
       <div className='container'>
         <div className='page-header'>
         </div>
         <div className='col-md-4 col-md-offset-4 login'>
           <h2> Login </h2>
           <div className='row center'>
           <button className="loginBtn loginBtn--facebook" data-max-rows="1" data-size="xlarge" 
           data-show-faces="false" data-auto-logout-link="false" onClick={this.handleClick.bind(this)}>
           Login with Facebook</button>
           </div>
         </div>
      
       </div>
      )
  }
}

export default Facebook;