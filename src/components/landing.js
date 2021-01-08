import React from 'react';

// Bootstrap Elements
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Landing extends React.Component{
  constructor(props){
  super(props)

  }

  render() {
   return (

    <div className = "landing">
      <Container className = "landingContainer">
        <Form>
          <Form.Group controlId = "userLoginName">
            <Form.Label>Username</Form.Label>
            <Form.Control type = "email" placeholder = "Enter Your Email"></Form.Control>
          </Form.Group>
          <Button variant = "secondary" type="submit">Enter</Button>
        </Form>
      </Container>
    </div>
    
   )
  }
}

export default Landing;