import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

// CUSTOM CSS
import '../../css/suggestedgroupscard.css';

export default class suggestedGroupscards extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <>
                <div className="view-profile-image-container">
                    <h4 id="view-profile-text">Suggested Groups</h4>
                    <br />
                    <div id="userImage6"></div><h5>Dog Poker Group</h5>
                    <div id="userImage7"></div><h5>Dog Sledding Group</h5>
                    <div id="userImage8"></div><h5>Dog Film Group</h5>
                    <div id="userImage9"></div><h5>Dog Walking Group</h5>
                </div>
            </>
        );
    }
}

