import React from 'react'; // import react component
import 'bootstrap/dist/css/bootstrap.min.css'; // add bootstrap styles
import './App.css'; // add custom CSS values 

// COMPONENTS
import Landing from './components/landing';
import Profile from './components/profile';

// this app uses the class based system
// this class contains the render method
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      loggedIn: false
    }
  }

  //final part of login
  //toggles state of loggedIn
  userLogin(username) {
    this.setState(() => ({
      username: username,
      loggedIn: !this.state.loggedIn
    }))
  }

  render() {
    return (
      <>
        { this.state.loggedIn ? <Profile logout={() => this.userLogin()} username={this.state.username} /> : <Landing userLogin={(username) => this.userLogin(username)} />}
      </>
    );
  }
}


export default App;
