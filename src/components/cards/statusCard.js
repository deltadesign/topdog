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
        <Card.Title>UserName</Card.Title>
        <Card.Body>On the internet nobody knows you're a dog</Card.Body>
      <Row>
        <Col md={11}>
          {/* empty column */}
        </Col>
        <Col md={1}>
          <div className="buttonbox">
            <Button variant = "outline-success">▲</Button>
            <Button variant = "outline-danger">▼</Button>
            <div className="likes">100</div>
          </div>
        </Col>
      </Row>
    </Card>
    </>
  );
}
}

export default Status;