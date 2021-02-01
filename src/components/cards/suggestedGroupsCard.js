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
                     <div className="sugg-groups-left">
                         <div className="row-wrapper">
                    <div id="userImage6">
                        <div className="spot-on1"></div>
                        </div>
                        <div className="text-wrapper">
                        <h5>Dog Poker Group</h5>
                         <h6>1 new post</h6>
                        </div>
                    </div>
                    <div className="row-wrapper">
                    <div id="userImage7"></div>
                    <div className="text-wrapper">
                    <h5>Dog Sledding Group</h5>
                     <h6>Updated 5 hours ago</h6>
                     </div>
                     </div>
                     <div className="row-wrapper">
                    <div id="userImage8"></div>
                    <div className="text-wrapper">
                    <h5>Dog Film Group</h5>
                    <h6>Updated 12 hours ago</h6>
                    </div>
                    </div>
                    <div className="row-wrapper">
                    <div id="userImage9">
                    <div className="spot-on1"></div>
                    </div>
                    <div className="text-wrapper">
                    <h5>Dog Walking Group</h5>
                    <h6>2 new posts</h6>
                    </div>
                    </div>
                </div>
                </div>
            </>
        );
    }
}

