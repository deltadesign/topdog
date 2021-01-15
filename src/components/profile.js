import React from 'react'

//COMPONENTS
import Status from '../components/cards/statusCard';

//BOOTSTRAP COMPONENTS
// Bootstrap Elements
import Container from 'react-bootstrap/Container';

class Profile extends React.Component{
  constructor(props){
    super(props)
  }

    render() {
      return (
        <Container>
          <h2>STATUS CARD</h2>
        <Status/>
        </ Container>
      )
  }
}

export default Profile;