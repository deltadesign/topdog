import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/card'
import Button from 'react-bootstrap/button';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';

// Bootstrap Elements
// import Container from 'react-bootstrap/Container';



class Feed extends React.Component {
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
                            <div id="userImage"></div>
                        </div>
                    </div>
                    {/* <div className="lower-container"> */}
                    <h3>Brian</h3>
                    <h4>Head of Security</h4>
                    <h5>Following</h5>
                    <h6>2</h6>

                    <h5>Followers</h5>
                    <h6>234</h6>
                    {/* </div> */}
                </div>
            </>
        );
    }
}



export default Feed;