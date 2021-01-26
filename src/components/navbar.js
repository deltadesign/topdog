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
        {/* <div class="navbar"> */}
            <div className="row">
                <h4 className="logo-text">Top Dog</h4>
                </div>
                 <a href="#Home">Home</a>
                    <a href="#profile">Profile</a>
                        <a href="#Newsfeed">Newsfeed</a>
                            <a href="" onClick={()=>this.props.logout()}>Logout</a>
                           





             

           


              
                   



        )
    }
}

export default Navbar;


