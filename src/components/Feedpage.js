import React from 'react';
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import FeedCard from './cards/feedCard';
import StatusCard from './cards/statusCard';
import Footer from './footer';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Container from 'react-bootstrap/container';
import ImageCarousel from './carousel'



class Feedpage extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (

            <div>
                <Row><Navbar /></Row>
                <Container>
                    <Row>
                        <Col md='3'><FeedCard /></Col>
                        <Col md='6'><StatusCard /></Col>
                        <Col md='3'><ImageCarousel /></Col>

                    </Row>
                </Container>

                <div>
                    <Row><Footer /></Row>
                </div>

            </div>

        )
    }
}

export default Feedpage;