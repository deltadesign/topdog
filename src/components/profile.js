  
import React from 'react'

//COMPONENTS
import ImageCarousel from '../components/carousel';
import Feed from '../components/cards/feedCard';
import Status from '../components/cards/statusCard';
// import StatusCard1 from '../components/cards/statusCard1';
// import StatusCard2 from '../components/cards/statusCard2';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
// import Gallerycard from '../components/cards/galleryCard';

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
          <Navbar/>
          <Button variant = "outline-dark" onClick = {()=>this.logout()}>LOGOUT</Button>   
             <Feed/>
          
           <Status/>
            {/* <StatusCard1/>
              <StatusCard2/> */}
              {/* <Gallerycard/> */}
              <Footer/>
          {/* <ImageCarousel/> */}

        </Container>
      )
  }
}

export default Profile;