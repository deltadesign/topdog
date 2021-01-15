import React from 'react'; // import react component
import 'bootstrap/dist/css/bootstrap.min.css'; // add bootstrap styles
import './App.css'; // add custom CSS values

// COMPONENTS
import Landing from './components/landing';
import Profile from './components/profile';
import Footer from './components/footer';
import Navbar from './components/navbar';

// this app uses the class based system
// this class contains the render method
class App extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
  return (
    <> 
      {/* <Navbar/> */}
        {/* <Landing/> */}
        <Profile/>
          {/* <Footer/> */}
    </>
  );
}
}


export default App;
