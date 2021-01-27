import React from 'react';

//COMPONENTS
import CommentCard from './commentCard'

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
      <CommentCard key={i} comment = {comment} />
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
      <div>
        
      <Card className="status-card1">
       {/* <pre>{JSON.stringify(this.state)}</pre> */}
        <Row>
          <Col md={4}>
            <div className="imageContainer">
            <div id="userImage1"></div> 
            </div>
          </Col>
          <Col md={8}> 
            <h3>Bob's status update</h3>
            <h5 className= "post-content">{this.props.text}</h5>
          </Col>           
        </Row> 
        
        <div className="buttonbox">
          <div onClick={()=>this.pawsome()}><IoPawSharp/></div>
          <div className="likes">{this.state.likes}</div>
        </div>
    
      </Card>

        <Row>
          <Col>{this.renderComments()}</Col>
        </Row>
       
          <Form onSubmit = {(e) => this.addComment(e)}>
            <Form.Group className="m-3" controlId="comment">
              <Form.Row>
                <Col> 
                  <Form.Control
                  placeholder="Add a Comment..."
                  name = "comment"
                  onChange = {(e) => this.handleChange(e)}
                  value = {this.state.comment}
                  />
                </Col>
                <Col>
                  <Button variant = "secondary" type="submit">Comment</Button>
                </Col>
              </Form.Row>
            </Form.Group>
          </Form>
        

      </div>
     );
  }
}

export default StatusCard1;