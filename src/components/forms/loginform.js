import React from 'react';

// Bootstrap Elements
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Login extends React.Component{
  constructor(props){
  super(props) 
  this.state = {
    passedAuth: true,
  }

}

  //this is the start point of the login function
  // it calls a function in landing.js
  submitHandler(e){
    e.preventDefault();
    
    const username = e.target.username.value;
    const password = e.target.password.value;

    // conditional for login, if username & pword are blank no access
    if(username === '' || password !== 'Secret'){
      this.setState(()=> ({
        passedAuth : false
      }))
    } else {
      this.props.login(username);
    }
    
    // this.props.login(username);

    e.target.username.value = "";
    e.target.password.value = "";
  }

  render() {
   return (
        <div className = "form-wrapper">
          <h1 className="login-logo">Top Dog</h1>
          {/* <pre>{JSON.stringify(this.state)}</pre> */}
          <p className={this.state.passedAuth ? "login-pass" : "login-fail"}>Username / Password is not recognised</p>
          <Form onSubmit= {(e) => this.submitHandler(e)} className ="user-login-form">
            <Form.Group controlId = "user-login-name">
              <Form.Row className="align-items-center">
                <Form.Label>Username</Form.Label>
                <Form.Control className="form-input" name="username" type = "text" placeholder = "username" value= "Bruce Wayne"></Form.Control>
              </Form.Row>
            </Form.Group>
            <Form.Group controlId = "user-password">
              <Form.Row className="align-items-center">
                <Form.Label>Password</Form.Label>       
                <Form.Control className="form-input" name="password" type = "password" placeholder = "Password" value="Secret"></Form.Control>            
              </Form.Row>
            </Form.Group>
              <Button id="submit" variant = "secondary" type="submit">Submit</Button>
        </Form>
      </div>     
   )
  }
}

export default Login;
