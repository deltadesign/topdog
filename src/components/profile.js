import React from 'react'

//COMPONENTS
import ImageCarousel from '../components/carousel';
import Feed from '../components/cards/feedCard';
import Status from '../components/cards/statusCard';

//BOOTSTRAP COMPONENTS
// Bootstrap Elements
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/button';

class Profile extends React.Component{
  constructor(props){
    super(props)
  }

  logout(){
    console.log('Logging out')
    this.props.logout()
  }

    render() {
      return (
        <Container>

          <h2>status Card</h2>
        <Status/>

          <Feed/>
          <Button variant = "outline-dark" onClick = {()=>this.logout()}>LOGOUT</Button>
          <Status/>
          <ImageCarousel/>

        </ Container>
      )
  }
}

export default Profile;