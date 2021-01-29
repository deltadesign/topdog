import React from 'react'

//COMPONENTS
import StatusForm from '../components/forms/statusform';
import Feed from '../components/cards/feedCard';
import StatusCard1 from '../components/cards/statusCard1';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ViewprofileCard from './cards/viewprofileCard';


//BOOTSTRAP COMPONENTS
// Bootstrap Elements
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';

//CUSTOM CSS
import '.././css/profile.css'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [`Hello ${this.props.username}! Welcome to topdog, the social media site for four legged friends who want to connect with the rest of the canine world!`, `Missed the postman this morning! He's obviously been working out he was much faster at running away compared to last week!!! #heck`]
    }
  }

  //status updater
  updateStatus(status) {
    this.setState(() => ({
      posts: [...this.state.posts, status]
    }))
  }

  //status render method
  renderPosts() {
    const posts = this.state.posts;

    return posts.map((post, i) => (
      <StatusCard1 key={i} text={post} />
    )).reverse()
  }

  //logout method
  logout() {
    console.log('Logging out')
    this.props.logout()
  }

  render() {
    return (
      <section className="profilepage">
      <Navbar logout={() => this.logout()} />
        

          <Row>
            <Col md="3" className="leftcol">
              <Feed />
            </Col>

            <Col md="6" className="midcol">
              <StatusForm statusUpdate={(status) => this.updateStatus(status)} />
              <br />
              {this.renderPosts()}
            </Col>

            <Col md="3" className="rightcol">
            <ViewprofileCard />
            </Col>
          </Row>

        

        <Footer />
      </section>
    )
  }
}

export default Profile;