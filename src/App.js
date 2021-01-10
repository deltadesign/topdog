import React from 'react'; // import react component
import 'bootstrap/dist/css/bootstrap.min.css'; // add bootstrap styles
import './App.css'; // add custom CSS values

// COMPONENTS
import Landing from './components/landing';
import Footer from './components/footer';


// this app uses the class based system
// this class conatins the render method
class App extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
  return (
    <>
        <Landing/>
        <Footer/>
    </>
  );
}
}


export default App;
