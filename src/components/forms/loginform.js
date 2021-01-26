import React from 'react';

// Bootstrap Elements
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Login extends React.Component{
  constructor(props){
  super(props)

  }

  //this is the start point of the login function
  // it calls a function in landing.js
  submitHandler(e){
    e.preventDefault();
    
    const username = e.target.username.value;
    const password = e.target.password.value;

    // conditional for login, if username & pword are blank no access
    // if(username === '' || password === ''){
    //   console.log('no access')
    // } else {
    //   this.props.login();
    // }
    
    this.props.login(username);

    e.target.username.value = "";
    e.target.password.value = "";
  }

  render() {
   return (
        
          <Form onSubmit= {(e) => this.submitHandler(e)}>
            <Form.Group controlId = "user-login-name">
              <Form.Row className="align-items-center">
                <Form.Label>Username</Form.Label>
                <Form.Control name="username" type = "text" placeholder = "username" required></Form.Control>
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