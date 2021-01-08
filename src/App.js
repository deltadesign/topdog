import React from 'react'; // import react component
import 'bootstrap/dist/css/bootstrap.min.css'; // add bootstrap styles
import './App.css'; // add custom CSS values

// COMPONENTS
import Landing from './components/landing';


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
    </>
  );
}
}


export default App;
