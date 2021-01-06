import React from 'react';
import logo from './logo.svg';
import './App.css';


// this app uses the class based system
// this class conatins the render method
class App extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>TOP DOG 2021</h2>
      </header>
    </div>
  );
}
}


export default App;
