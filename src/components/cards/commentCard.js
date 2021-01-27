import React from 'react'

import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';

import {IoPawSharp} from 'react-icons/io5';

export default class commentCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      likes: 0,
      liked: false,
      }
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

  render() {

    const cardstyle = {
      background: "var(--brandbckgrnd)",
      borderRadius: "9px",
      border: "3px solid #555",
      borderRadius: "15px" ,
      fontFamily: "Arial",
      margin: "10px 0",
      padding: "0.5em" ,
    }

    const commentstyle = {
      display: "flex",
      padding: "0.5em" ,
      backgroundColor: "white",
      borderRadius: "15px" ,
      minHeight: "85%",
    }

    const colstyle = {
      display: "flex",
      flexDirection: "column",
      justifyItems: "center",
      justifyContent: "flex-end"
    }

    return (
           
          <div style = {cardstyle}>
            <Row>
              <Col sm={1}>
                <div id="userImage2"></div>
                <div><p>Doug</p></div>
              </Col>
              <Col sm={9}>
                <div style = {commentstyle}>{this.props.comment}</div>
              </Col>
              
              <Col sm={2} style ={colstyle}>
                <div className="buttonbox">
                <div onClick={()=>this.pawsome()}><IoPawSharp/></div>
                <div className="likes">{this.state.likes}</div>
                </div>
              </Col>     
            </Row>
          </div>
      
    )
  }
}





//just keeping these here
{/* <div id="userImage2"></div><h5>Doug</h5>
<div id="userImage3"></div><h5>Ted</h5>
<div id="userImage4"></div><h5>Pete</h5>
<div id="userImage5"></div><h5>Kat</h5> */}
