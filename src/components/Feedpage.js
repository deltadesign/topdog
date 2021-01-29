import React from 'react';
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import FeedCard from './cards/feedCard';
import StatusCard1 from './cards/statusCard1';
import Footer from './footer';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Container from 'react-bootstrap/container';
import ImageCarousel from './carousel'
import StatusForm from './forms/statusform'


class Feedpage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    renderPosts() {
        const posts = this.state.posts;
    
        return posts.map((post, i) => (
          <StatusCard1 key={i} text={post} />
        )).reverse()
      }

      updateStatus(status) {
        this.setState(() => ({
          posts: [...this.state.posts, status]
        }))
      }

    render() {
        return (

            <div>
                <Row><Navbar /></Row>
                {/* <pre>{JSON.stringify(this.state)}</pre> */}
                <Container>
                    <Row>
                        <Col md='3'><FeedCard /></Col>
                        <Col md='6'><StatusForm statusUpdate={(status) => this.updateStatus(status)}/>{this.renderPosts()}</Col>
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