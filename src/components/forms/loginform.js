import React from 'react';

// Bootstrap Elements
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Login extends React.Component{
  constructor(props){
  super(props)

  }

  render() {
   return (

    <div className = "login">      
        
        <Form className = "user-login-form">
            <Form.Group controlId = "user-login-name">
              <Form.Row className="align-items-center">
                <Form.Label>Username</Form.Label>
                <Form.Control type = "email" placeholder = "Your Email Address"></Form.Control>
              </Form.Row>
            </Form.Group>
            <Form.Group controlId = "user-password">
              <Form.Row className="align-items-center">
                <Form.Label>Password</Form.Label>       
                <Form.Control type = "password" placeholder = "Password"></Form.Control>            
              </Form.Row>
            </Form.Group>
              <Button variant = "secondary" type="submit">Submit</Button>
        </Form>

    </div>
    
   )
  }
}

export default Login;