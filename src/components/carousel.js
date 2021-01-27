import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

// Bootstrap Elements
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel'
import dogFood from '.././assets/images/dogFood.jpg'; // with import
import crackers from '.././assets/images/PeopleCrackers.jpg'; // with import
import lassie from '.././assets/images/Lassie.jpg'; // with import

class imageCarousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <>
            
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
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
                            className="d-block w-100"
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
                            className="d-block w-100"
                            src={lassie} 
                            style={{height:"100%",width:"auto"}}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        );
    }
}



export default imageCarousel;