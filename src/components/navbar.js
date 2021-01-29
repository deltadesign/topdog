import React from 'react';

import { GiDogHouse } from 'react-icons/gi';
import { SiDatadog } from "react-icons/si";
import { ImNewspaper } from "react-icons/im";
import { GiExitDoor } from "react-icons/gi";

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
                        <a href="#Home" title="home"><GiDogHouse className="navbar-icon" /></a>
                        <a href="#profile" title="profile"><SiDatadog className="navbar-icon" /></a>
                        <a href="#Newsfeed" title="newsfeed"><ImNewspaper className="navbar-icon" /></a>
                        {/* <a href="#Newsfeed"><GiExitDoor style={{height:"40px", width:"40px"}}/></a> */}
                        <a href="#" onClick={() => this.props.logout()} title="logout"><GiExitDoor className="navbar-icon" /></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;


