import React from 'react';


//components
import Login from './forms/loginform';

//CSS
import '../css/landing.css'


class Landing extends React.Component{
  constructor(props){
  super(props)

  }

  // part 2 of login
  // this calls a function in App.js to complete the login
  userLogin(username){
    this.props.userLogin(username)
  }

  render() {
   return (

    <div className = "landing-page">
      <div className="aboutarea">
        <div className="abouttext">
          <h1 className="logo">Top Dog</h1>
          <hr/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <hr/>
          <div>
            &copy;{new Date().getFullYear()} Top Dog Inc | All rights reserved | Terms of Service | Privacy |
          </div>
        </div>
      </div>
      <div className="loginbox">
        <Login login ={(username) => this.userLogin(username)} />
      </div>  
      
    </div>
    
   )
  }
}

export default Landing;