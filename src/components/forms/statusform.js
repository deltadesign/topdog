import React from 'react';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/button';
import '../../css/status-form.css'

export default class StatusForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      status: ""
    }
  }

  handleChange(e) {
    const newState = {};
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.statusUpdate(this.state.status)
    this.setState({
      username: "",
      status: ""
    })
  }

  render() {
    return (
      <Form onSubmit={(e) => this.submitHandler(e)} className='status-form'>
        {/* <pre>{JSON.stringify(this.state)}</pre> */}
        {/*       
      <Form.Group controlId = "username">
        <Form.Control name = "username" type = "text" value = {this.state.username} placeholder="Username" onChange = {(e) => this.handleChange(e)} required />
      </Form.Group> */}

        <Form.Group controlId="status">
          <Form.Control name="status" type="text" value={this.state.status} placeholder="What's happening?" onChange={(e) => this.handleChange(e)} required />
        </Form.Group>
        <div className="status-submit-row">
          <Button variant="outline-dark" type="submit">Post</Button>
        </div>
      </Form>
    )
  }
}
