import React from 'react'

//import image
import HeatherGrooming from '../../assets/images/HeatherGrooming.jpg';

//CUSTOM CSS
import '../../css/advert.css'

export default class Heather extends React.Component {
  render() {
    return (
      <div className="advertisement">
        <img src={HeatherGrooming}></img>
      </div>
    )
  }
}
