import React from 'react';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/button';
import '../../css/status-form.css'

export default class statusform extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      username: "",
      status: ""
    }
  }

  handleChange(e){
    const newState = {};
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  submitHandler(e){
    e.preventDefault();
    console.log(this.state.username , this.state.status)
    this.setState({
      username: "",
      status: ""
    })
  }

  render() {
    return (
      <Form onSubmit = {(e) => this.submitHandler(e)} className='status-form'>  
      
      <Form.Group controlId = "username">
        <Form.Control name = "username" type = "text" value = {this.state.username} placeholder="Username" onChange = {(e) => this.handleChange(e)} required />
      </Form.Group>
     
      <Form.Group controlId = "status"> 
        <Form.Control name = "status" as = "textarea" rows={3} value = {this.state.status} placeholder="What's happening?" onChange = {(e) => this.handleChange(e)} required />
      </Form.Group>

      <Button variant = "outline-dark" type = "submit">Post</Button>

    </Form>
    )
  }
}