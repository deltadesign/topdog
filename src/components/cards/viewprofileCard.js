import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/card'
import Button from 'react-bootstrap/button';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import '../../profilepage.css';

// Bootstrap Elements
// import Container from 'react-bootstrap/Container';


class ViewprofileCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <>
                <div className="profile-card">
                    <div className="upper-container">
                        <div className="image-container">
                           
                        </div>
                    </div>
                     <h3>Dogs who viewed profile</h3>
                
                     <div id="userImage2"></div><h5>Doug</h5>
                     <div id="userImage3"></div><h5>Ted</h5>
                     <div id="userImage4"></div><h5>Pete</h5>
                     <div id="userImage5"></div><h5>Kat</h5>
                   
                </div>
            </>
        );
    }
}



export default ViewprofileCard;
