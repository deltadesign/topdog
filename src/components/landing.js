import React from 'react';


//components
import Login from './forms/loginform';

//CSS
import '../css/landing.css'


class Landing extends React.Component{

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
          <p>Welcome to topdog, the social media site for four legged friends who want to connect with the rest of the canine world! Share your tail wagging walks and borks with puppers small and large, from all corners of the World Wide Web.</p>
          <hr/>
          <div className = "landing-foot">
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