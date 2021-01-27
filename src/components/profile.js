  
import React from 'react'

//COMPONENTS
import StatusForm from '../components/forms/statusform';
import ImageCarousel from '../components/carousel';
import Feed from '../components/cards/feedCard';
import StatusCard1 from '../components/cards/statusCard1';
import StatusCard2 from '../components/cards/statusCard2';
import StatusCard3 from '../components/cards/statusCard3';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ViewprofileCard from './cards/viewprofileCard';


//BOOTSTRAP COMPONENTS
// Bootstrap Elements
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/button';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';

class Profile extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      posts: [ `Hello ${this.props.username}! Welcome to topdog, the social media site for four legged friends who want to connect with the rest of the canine world!`, `Missed the postman this morning! He's obviously been working out he was much faster at running away compared to last week!!! #heck`]
    }
  }

  //status updater
  updateStatus(status){
    this.setState(() => ({
      posts: [...this.state.posts , status]
    }))
  }

  //status render method
  renderPosts(){
    const posts = this.state.posts;

    return posts.map((post , i) => (
      <StatusCard1 key ={i} text={post} />
    )).reverse()
  }

  //logout method
  logout(){
    console.log('Logging out')
    this.props.logout()
  }

    render() {
      return (
      
        <Container> 
          <div className = "profile-page"></div>

            <Navbar logout= {()=>this.logout()}/>

            <Row>
              <Col md="3">
                <Feed/> 
                <ViewprofileCard/> 
              </Col>

              <Col md="9">
                <StatusForm statusUpdate = {(status)=> this.updateStatus(status)}/>
                <br/>
                {this.renderPosts()}         
                {/* <br/>
                <StatusCard2/>
                <br/>
                <StatusCard3/> */}
              </Col>

            </Row>
               
              <Footer/>
         
        </Container>
      )
  }
}

export default Profile;