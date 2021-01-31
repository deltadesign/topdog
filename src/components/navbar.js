import React from 'react';

// import { GiDogHouse } from 'react-icons/gi';
import { SiDatadog } from "react-icons/si";
import { ImNewspaper } from "react-icons/im";
import { GiExitDoor } from "react-icons/gi";

//router elements
import { Link } from 'react-router-dom';

import '../css/navbar.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="navbar">
                <div className="nav-wrapper">
                    <div className="logo-wrapper">
                        <div className="logo-text">Td</div>
                        <div className="icon"><img src="https://img.icons8.com/pastel-glyph/64/000000/dog--v2.png" /></div>
                    </div>

                    <div className="nav-icons-wrapper">
                        {/* <a href="#Home" title="home"><GiDogHouse className="navbar-icon" /></a> */}
                        <Link to="/topdog" title="profile"><SiDatadog className="navbar-icon"/></Link>
                        <Link to="/topdog/newsfeed" title="newsfeed"><ImNewspaper className="navbar-icon" /></Link>
                        {/* <a href="#Newsfeed"><GiExitDoor style={{height:"40px", width:"40px"}}/></a> */}
                        <Link to="/topdog" onClick={() => this.props.logout()} title="logout"><GiExitDoor className="navbar-icon" /></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;


