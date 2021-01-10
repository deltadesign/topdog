import React from 'react';

//components
import Login from './forms/loginform'

// Bootstrap Elements
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/row';


class Landing extends React.Component{
  constructor(props){
  super(props)

  }

  render() {
   return (

    <div className = "landing">
      <Container className = "landingContainer">

        <Row>
          <h2 id="welcome-message">Welcome</h2>
        </Row>
        
        <Login />

      </Container>
    </div>
    
   )
  }
}

export default Landing;