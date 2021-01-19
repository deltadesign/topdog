import React from 'react'

//COMPONENTS
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
          <Button variant = "outline-dark" onClick = {()=>this.logout()}>LOGOUT</Button>
          <h2>STATUS CARD</h2>
        <Status/>
        </ Container>
      )
  }
}

export default Profile;