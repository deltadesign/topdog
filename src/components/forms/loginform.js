import React from 'react';

// Bootstrap Elements
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Login extends React.Component{
  constructor(props){
  super(props)

  }

  submitHandler(e){
    e.preventDefault();
    // console.log(e.target.username.value);
    // console.log(e.target.password.value);

    e.target.username.value = "";
    e.target.password.value = "";
  }

  render() {
   return (
        
          <Form onSubmit= {(e) => this.submitHandler(e)}>
            <Form.Group controlId = "user-login-name">
              <Form.Row className="align-items-center">
                <Form.Label>Username</Form.Label>
                <Form.Control name="username" type = "email" placeholder = "Your Email Address"></Form.Control>
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
              </Form.Row>
            </Form.Group>
            <Form.Group controlId = "user-password">
              <Form.Row className="align-items-center">
                <Form.Label>Password</Form.Label>       
                <Form.Control name="password" type = "password" placeholder = "Password"></Form.Control>            
              </Form.Row>
            </Form.Group>
              <Button variant = "secondary" type="submit">Submit</Button>
        </Form>
      
        
   )
  }
}

export default Login;