import React, { Component } from 'react'

import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';

export default class commentCard extends Component {

  render() {

    const cardstyle = {
      textAlign: "center",
      backgroundImage: "linear-gradient(to bottom right,var(--mainbrand),var(--brandbckgrnd))",
      borderRadius: "9px",
      border: "3px solid #555",
      borderRadius: "15px" ,
      padding: "10px",
      fontFamily: "Arial",
      margin: "10px 0"
    }

    const commentstyle = {
      padding: "0.5em" ,
      backgroundColor: "white",
      borderRadius: "15px" ,
      minHeight: "85%",
      minWidth: "85%",
    }

    return (
           
          <div style = {cardstyle}>
            <Row>
              <Col sm={1}>
              <div id="userImage2"></div>
              </Col>
              <Col sm={11}>
              <div style = {commentstyle}>{this.props.comment}</div>
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
