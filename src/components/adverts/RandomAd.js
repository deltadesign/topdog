import React from 'react'

//import images
import HeatherGrooming from '../../assets/images/adimages/HeatherGrooming.jpg';
import pets4homes from '../../assets/images/adimages/pets4homes.jpg';

//CUSTOM CSS
import '../../css/advert.css'

export default class RandomAd extends React.Component {

  randomAd(){
    const adNumber = Math.floor(Math.random()*2)

    switch(adNumber){

      case 0:
        return <img className="ad-img-fluid" src={HeatherGrooming} alt="an advert for Heathers grooming services" />
      
      case 1:
        return <img className="ad-img-fluid" src={pets4homes} alt="an advert for Heathers grooming services"/>
      

    }

  }

  render() {
    return (
      <div className="advertisement">
        <p>{this.randomAd()}</p>
      </div>
    )
  }
}
