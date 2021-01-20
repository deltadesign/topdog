import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/card'
import Button from 'react-bootstrap/button';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';


class Status extends React.Component{
  constructor(props){
  super(props)
  this.state = {}
  }

  render(){
  return (
    <>

    <Card className="status-card">
       <Row>
          <Col md={4}><div className="imageContainer">
      <div id="userImage1"></div> 
      </div></Col>
          <Col md={8}> <h3>Bob's status update</h3>
           <h5 className= "post-content"> Had a walk in the local park today</h5></Col>

        
           </Row>
    
          <div className="buttonbox">
            <Button variant = "outline-success">▲</Button>
              <div className="likes">100</div>
               </div>
               
             
          </Card>
       </>
     );
  }
}

export default Status;
















