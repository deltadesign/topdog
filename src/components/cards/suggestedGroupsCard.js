import React from 'react';

// CUSTOM CSS
import '../../css/suggestedgroupscard.css';

export default class SuggestedGroupscards extends React.Component {

    render() {
        return (
            <>
                <div className="suggested-groups-container">
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

