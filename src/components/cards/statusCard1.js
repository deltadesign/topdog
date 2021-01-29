import React from 'react';

//COMPONENTS
import CommentCard from './commentCard'

//BOOTSTRAP ELEMENTS
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/button';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Form from 'react-bootstrap/form';

//REACT ICONS
import {IoPawSharp} from 'react-icons/io5';

//CUSTOM CSS
import '../../css/statuscard.css'

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
      <div className="status-card-wrapper">
        
        <div class="status-card-content">

          <div className="status-card-colleft">
            <div id="userImage1"></div> 
          </div>

          <div className="status-text">
            <div className="status-card-colmid">
              <h3 className = "username-text">Bob's status update</h3>
              <h5 className="post-content">{this.props.text}</h5>
            </div>

            <div className="reaction-row">
              <div className="buttonbox">
                <div onClick={()=>this.pawsome()}><IoPawSharp/></div>
                <div className="likes">{this.state.likes}</div>
             </div>
          </div>

          </div>

      </div>

        <Row className="comments-row">
          <Col>{this.renderComments()}</Col>
        </Row>
       
          <Form onSubmit = {(e) => this.addComment(e)}>
            <Form.Group className="m-3" controlId="comment">
              <Form.Row>
                
                  <Form.Control
                  placeholder="Add a Comment..."
                  name = "comment"
                  onChange = {(e) => this.handleChange(e)}
                  value = {this.state.comment}
                  />
                  <div className="submit-btn-wrapper">
                    <Button variant="outline-dark" className="submit-btn" type="submit">Comment</Button>
                  </div>
              </Form.Row>
            </Form.Group>
          </Form>
        
      </div>
     );
  }
}

export default StatusCard1;