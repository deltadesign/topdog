import React from 'react';

//BOOTSTRAP ELEMENTS
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/form';

//REACT ICONS
import {IoPawSharp} from 'react-icons/io5';

class StatusCard1 extends React.Component{
  constructor(props){
  super(props)
  this.state = {
    likes: 0,
    liked: false,
    comment:'',
    comments: [] 
    }
  }

  //HANDLES COMMENT TEXT
  handleChange(e){
    this.setState(() => ({
      comment: e.target.value
    }))
  }

  //HANDLES ADDING COMMENTS
  addComment(e){
    // console.log(e.target)
    const comment = this.state.comment;
    const comments = this.state.comments;

    if(comment.length === 0){
      alert('doin a bamboozle.. comments cannot be blank')
    }else{
    this.setState(() => ({
      comments: [...comments, comment],
      comment: ""
    }))
    }
    e.preventDefault();
  }

  //RENDERS ALL COMMENTS
  renderComments(){
    return this.state.comments.map((comment, i) => (
      <h3 key = {i} style={{width:'600px', backgroundColor: 'white'}}>{comment}</h3>
    ))
  }

  //ADDS & REMOVES A LIKE
  pawsome(){
    const liked = this.state.liked;

    if(liked === false){
      this.setState(() => ({
        likes: this.state.likes+1,
        liked: true
      }))
    } else {
      this.setState(() => ({
        likes: this.state.likes-1,
        liked: false
      }))
    }
  }

  render(){
    return (

      <Card className="status-card1">
       <pre>{JSON.stringify(this.state)}</pre>
        <Row>
          <Col md={4}>
            <div className="imageContainer">
            <div id="userImage1"></div> 
            </div>
          </Col>

          <Col md={8}> 
            <h3>Bob's status update</h3>
            <h5 className= "post-content"> Had a walk in the local park today with Louie</h5>
          </Col>           
        </Row>
        
        <div className="buttonbox">
          <div onClick={()=>this.pawsome()}><IoPawSharp/></div>
          <div className="likes">{this.state.likes}</div>
        </div>              
          <Form onSubmit = {(e) => this.addComment(e)}>

            <InputGroup className="m-3 buttonbox" style={{width:'600px'}}>
              <Form.Control
              placeholder="Comment..."
              name = "comment"
              onChange = {(e) => this.handleChange(e)}
              value = {this.state.comment}
              />
              <InputGroup.Append>
              <Button variant = "secondary" type="submit">Comment</Button>
              </InputGroup.Append>
            </InputGroup>
           </Form>
       
        <Row>
          <Col>
          {this.renderComments()}
          </Col>
        </Row>
      
      </Card>
     );
  }
}

export default StatusCard1;