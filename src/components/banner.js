

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

// Bootstrap Elements
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';

//Custom CSS
import '../css/banner.css'

class banner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            // <div className="image-banner">
            
                <Jumbotron className ="jumbotron">
                    
                </Jumbotron>
            
        );
    }
}



export default banner;