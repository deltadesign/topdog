import React from 'react'

//import images
import HeatherGrooming from '../../assets/images/adimages/HeatherGrooming.jpg';
import pets4homes from '../../assets/images/adimages/pets4homes.jpg';
import woofglider from '../../assets/images/adimages/woofglider.jpg';
import adoptable from '../../assets/images/adimages/adoptable.jpg';
import dogstrust from '../../assets/images/adimages/dogstrust.jpg';

//CUSTOM CSS
import '../../css/advert.css'

export default class RandomAd extends React.Component {

  randomAd(){
    const adNumber = Math.floor(Math.random()*5)

    switch(adNumber){

      case 0:
        return <img className="ad-img-fluid" src={HeatherGrooming} alt="an advert for Heathers grooming services" />;
    
      case 1:
        return <img className="ad-img-fluid" src={pets4homes} alt="an advert for pets for homes" />;

      case 2:
        return <img className="ad-img-fluid" src={dogstrust} alt="an advert for dogs trust" />;

      case 3:
        return <img className="ad-img-fluid" src={woofglider} alt="an advert for the woof glider dog frisbee" />;

      case 4:
        return <img className="ad-img-fluid" src={adoptable} alt="an advert for adoptable" />;
      
      default:
        return <img className="ad-img-fluid" src={woofglider} alt="an advert for the woof glider dog frisbee" />;

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
