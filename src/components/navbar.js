import React from 'react';

// Bootstrap Elements
// import Container from 'react-bootstrap/Container';


class Navbar extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (

        <div className="navbar">
        <div class="navbar">
            <div className="row">
                <h4 className="logo-text">Top Dog</h4>
                </div>
                 <a href="#Home">Home</a>
                    <a href="#profile">Profile</a>
                        <a href="#Newsfeed">Newsfeed</a>
                            <a href="#extra">Extra</a>
                            
                {/* <a href="#links">Links</a> */}
                {/* <a href="#">Link 1</a>
                <a href="#">Link 2</a> */}
            
            </div>

               

            </div>     
                   



        )
    }
}

export default Navbar;


