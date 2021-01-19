import React from 'react';

//components
import Login from './forms/loginform';
import Footer from './footer';

// Bootstrap Elements
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/row';


class Landing extends React.Component{
  constructor(props){
  super(props)

  }

  // part 2 of login
  // this calls a function in App.js to complete the login
  userLogin(){
    this.props.userLogin()
  }

  render() {
   return (

    <div className = "landing-page">
      <div className="aboutarea">
        <div className="abouttext">
          <h1>Top Dog</h1>
          <hr/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <hr/>
          <div>
            &copy;{new Date().getFullYear()} Top Dog Inc | All rights reserved | Terms of Service | Privacy |
          </div>
        </div>
      </div>
      <div className="loginbox">
        <Login login ={() => this.userLogin()} />
      </div>  
      
    </div>
    
   )
  }
}

export default Landing;