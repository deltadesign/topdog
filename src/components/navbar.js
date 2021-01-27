import React from 'react';

import { GiDogHouse } from 'react-icons/gi';
import { SiDatadog } from "react-icons/si";

import '../css/navbar.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (

        <div className="navbar">
        
                <h4 className="logo-text">Top Dog</h4>
                
                <a href="#Home"><GiDogHouse style={{height:"40px", width:"40px"}}/></a>
                <a href="#profile"><SiDatadog style={{height:"40px", width:"40px"}}/></a>
                <a href="#Newsfeed">Newsfeed</a>
                <a href="" onClick={()=>this.props.logout()}>Logout</a>
                           
        </div>
        )
    }
}

export default Navbar;


