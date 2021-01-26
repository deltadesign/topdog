import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/card'
import Button from 'react-bootstrap/button';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
// import {IoPawSharp} from 'react-icons/Io5';


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
          <Col md={2}><div className="imageContainer">
      <div id="userImage1"></div> 
      </div></Col>
          <Col md={8}> <h3>Bob's status update</h3>
           <h5 className= "post-content"> Saw Louie the Jack Russell today in the park, hope hes in the park tomorrow!</h5></Col>

        
           </Row>
    
          <div className="buttonbox">
            {/* <IoPawSharp/> */}
        
              <div className="likes">100</div>
               </div>
               
             
          </Card>
       </>
     );
  }
}

export default Status;
















