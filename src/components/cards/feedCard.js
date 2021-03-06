import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { TiCamera } from "react-icons/ti";
// CUSTOM CSS

import '../../css/feedcard.css'

class Feed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <>
                <div className="profile-header-card">

                    <div className="image-container">
                        <div id="userImage"> 
                                <div title="upload image"><TiCamera className="feedcard-icon" /></div>
                        </div>
                    </div>


                    <h3>{this.props.username}</h3>
                    <h4>Head of Security</h4>
                    <h5>Following</h5>
                    <h6>2</h6>

                    <h5>Followers</h5>
                    <h6>234</h6>

                </div>
            </>
        );
    }
}



export default Feed;