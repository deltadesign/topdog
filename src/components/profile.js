import React from 'react'

//COMPONENTS
import StatusForm from '../components/forms/statusform';
import Feed from '../components/cards/feedCard';
import StatusCard1 from '../components/cards/statusCard1';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ViewprofileCard from './cards/viewprofileCard';
import ImageCarousel from './carousel';
import RandomAd from './adverts/RandomAd';
import Feedpage from './Feedpage';

//ROUTER
import { BrowserRouter as Router, Route } from 'react-router-dom';


//BOOTSTRAP COMPONENTS
// Bootstrap Elements
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

    return posts.map((post, i) => {
      if(i%3===0){
       return <>
        <StatusCard1 key={i} text={post} />
        <RandomAd/>
        </>
      } else {
        return <StatusCard1 key={i} text={post} />
      }
    }).reverse()
  }

  //logout method
  logout() {
    console.log('Logging out')
    this.props.logout()
  }

  render() {
    return (
      <Router>
        <Navbar logout={() => this.logout()} />
        <Route path="/" exact render={(props) => (
          <>
            <section className="profilepage">
              <Row>
                <Col md={3} className="leftcol">
                  <Feed />
                </Col>

                <Col md={6} className="midcol">
                  <StatusForm statusUpdate={(status) => this.updateStatus(status)} />
                  <br />
                  {this.renderPosts()}
                  
                </Col>

                <Col md={3} className="rightcol">
                  <ViewprofileCard />
                  <div className="profile-ad-wrapper">
                    <ImageCarousel />
                  </div>

                </Col>
              </Row>
            </section>
          </>
        )} />

        <Route path="/newsfeed" component={Feedpage} />

        <Footer />

      </Router>
    )
  }
}

export default Profile;