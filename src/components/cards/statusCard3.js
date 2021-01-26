import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/card'
import Button from 'react-bootstrap/button';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import '../../profilepage.css';
import {IoPawSharp} from 'react-icons/io5';

class statusCard3 extends React.Component{
  constructor(props){
  super(props)
  this.state = {}
  }

  render(){
    return (
      <>
  
      <Card className="status-card3">
         <Row>
            <Col md={4}><div className="imageContainer">
        <div id="userImage1"></div> 
        </div></Col>
            <Col md={8}> <h3>Bob's status update</h3>
             <h5 className= "post-content"> Feeling fed up today, hope we go to the park!</h5></Col>
  
  
             </Row>
  
            <div className="buttonbox">
              <IoPawSharp/>
  
                <div className="likes">100</div>
                 </div>
  
  
            </Card>
         </>
       );
    }
  }
  
  export default statusCard3;