import React from 'react'; // import react component
import 'bootstrap/dist/css/bootstrap.min.css'; // add bootstrap styles
import './App.css'; // add custom CSS values


// COMPONENTS
import Landing from './components/landing';
import Profile from './components/profile';
import Footer from './components/footer';
import Navbar from './components/navbar';
import ImageCarousel from './components/carousel';

// this app uses the class based system
// this class contains the render method
class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      loggedIn: false
    }
  }

  //final part of login
  //toggles state of loggedIn
  userLogin(){
   
   this.setState((state) => ({
     loggedIn: !this.state.loggedIn
   }))
  }

  render() {
  return (
    <> 
<<<<<<< HEAD
    {/* <pre>{JSON.stringify(this.state)}</pre> */}
      {/* <Navbar/> */}
       {this.state.loggedIn ? <Profile logout = {()=>this.userLogin()}/> : <Landing userLogin = {()=>this.userLogin()}/>}
      {/* <Footer/> */}
=======
      <Navbar/>
        {/* <Landing/> */}
        {/* <Profile/> */}
        <ImageCarousel/>
          {/* <Footer/> */}
>>>>>>> carouselFeatureBranch
    </>
  );
}
}


export default App;
