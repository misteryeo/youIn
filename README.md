# YouIn

> YouIn allows users to coordinate hanging out more easily than ever before.  Bring an end to the hassle of having multiple text conversations to see if people are in, or out.  With the click, a user can create and invite friends to any spontaneous event they want to do.  Those friends get an invite and with one click say whether they're in, or they're out.  You in?


##Team

 - Anthony Bianco
 - Nicholas Below
 - David Brodie
 - Augustus Brennan

 ##Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Roadmap](#roadmap)
1. [Contributing](#contributing)


## Usage



**THIS APP REQUIRES FACEBOOK**
Getting your Facebook App ID:

tl;dr
Visit https://developers.facebook.com/ , login and use the provided prompts/docs/interface to get your app ID (required to get the app functioning). 

Detailed Instructions:
1) Visit https://developers.facebook.com/
2) Login with your facebook account.
3) Click your profile photo.  In the dropdown, select "Add a New App".
  a) Choose a display name for your app (the name your app will have on facebook)
  b) Fill in a contact e-mail
  c) Choose a category for your app - we suggest "Communication".  'Cause that's how we roll.
4) Once logged in, your app ID will be available under the 'Settings' tab.
5) Fill in the App Domain and site URL with your localhost web address (later you will update with your proper, deployement URl).

ONCE YOU HAVE YOUR APP ID:
1) The Facebook.jsx file is the main source for facebook connectivity in You In.
  IMPORTANT
    Because Facebook will only allow you to have one URL for your site, you will need multiple App IDs to use the app on a localhost server, staging on Heroku, and production on Heroku.  Creating multiple app IDs by following the above instructions again is an easy solution to this challenge.
2) In the FB.init function in Facebook.jsx, input your separate app IDs in the appIds section, depending on the URL of the app.  
```javascript

    window.fbAsyncInit = function() {
    FB.init({
    appId      : window.location.host === 'localhost:PORT' ? 'APP_ID1' :           window.location.host === 'HEROKU_ADDRESS' ? 'APP_ID2' :'APP_ID3',
    cookie     : true,  // enable cookies to allow the server to access
                          // the session
    xfbml      : true,
    version    : 'v2.1'
      });
      ...
```



  Project Roles on developers.facebook.com
1) You will want to add all members of the project to the 'Roles' section in appropriate categories.  





## Requirements

 -Node 6.8.1
 -PostgreSQL 9.9.4
 -Webpack 2.2.x



## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
npm run start-dev (starting server with Nodemon)
npm run dev (running Webpack with watch configuration)
```
### Roadmap


View the project roadmap [here](https://docs.google.com/spreadsheets/d/12_Eu1kK5os0wg08HghBuHDD_Lew8vWZ1nWyCUflK75U/edit?ts=58c754e3#gid=0)



## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
