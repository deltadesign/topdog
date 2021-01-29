import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

// CUSTOM CSS
import '../../css/viewprofilecard.css';

export default class ViewprofileCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <>
                <div className="view-profile-image-container">
                    <h4 id="view-profile-text">Recent Views</h4>
                    <br />
                    <div id="userImage2"></div><h5>Doug</h5>
                    <div id="userImage3"></div><h5>Ted</h5>
                    <div id="userImage4"></div><h5>Pete</h5>
                    <div id="userImage5"></div><h5>Kat</h5>
                </div>
            </>
        );
    }
}

