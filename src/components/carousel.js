import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

// Bootstrap Elements
import Carousel from 'react-bootstrap/Carousel'
import dogFood from '.././assets/images/dogFood.jpg'; // with import
import crackers from '.././assets/images/PeopleCrackers.jpg'; // with import
import lassie from '.././assets/images/Lassie.jpg'; // with import

//Custom CSS
import '../css/imagecarousel.css'

class imageCarousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <div className="carousel-wrapper">
                <Carousel className = "image-carousel">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-img-fluid"
                            src={dogFood} 
                            // style={{height:"100%",width:"auto"}}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-img-fluid"
                            src={crackers} 
                            style={{height:"100%",width:"auto"}}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-img-fluid"
                            src={lassie} 
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}



export default imageCarousel;