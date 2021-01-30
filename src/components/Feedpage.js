import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Feed from './cards/feedCard';
import StatusCard1 from './cards/statusCard1';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import ImageCarousel from './carousel'
import StatusForm from './forms/statusform';
import RandomAd from './adverts/RandomAd';

//CUSTOM CSS
import '../css/newsfeed.css'


class Feedpage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: ["who let the dogs out??"]
        }
    }

    //status render method
    renderPosts() {
        const posts = this.state.posts;

        return posts.map((post, i) => {
            if (i % 3 === 0) {
                return <>
                    <StatusCard1 key={i} text={post} />
                    <RandomAd />
                </>
            } else {
                return <StatusCard1 key={i} text={post} />
            }
        }).reverse()
    }

    updateStatus(status) {
        this.setState(() => ({
            posts: [...this.state.posts, status]
        }))
    }

    render() {
        return (

            <section className="newsfeed-page">
                <Row>
                    <Col md='3' className="newsfeed-leftcol">
                        <Feed />
                    </Col>
                    <Col md='6' className="newsfeed-midcol">
                        <StatusForm statusUpdate={(status) => this.updateStatus(status)} />
                        <br />
                        {this.renderPosts()}
                    </Col>
                    <Col md='3' className="newsfeed-rightcol">
                        <div className="newsfeed-ad-wrapper">
                            <ImageCarousel />
                        </div>
                    </Col>
                </Row>
            </section>

        )
    }
}

export default Feedpage;