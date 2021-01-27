import React from 'react';

// CUSTOM CSS
import '../css/footer.css'


class Footer extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (

            <div className="footer">
                {/* <Container className="footerContainer"> */}
                    {/* <div className="row">
                        <div className="col">
                            <h4>Top Dog Inc</h4>
                            <ul className="list-unstyled">
                                <li>0800 415 3453</li>
                                <li>123 Barking Road</li>
                                <li>London</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4>Stuff</h4>
                            <ul className="list-unstyled">
                                <li>Some Stuff</li>
                                <li>More Stuff</li>
                                <li>Even More Stuff</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4>Last Column</h4>
                            <ul className="list-unstyled">
                                <li>Some Info</li>
                                <li>More Info</li>
                                <li>Even More Info</li>
                            </ul>
                        </div>
                    </div> 
                    <hr />*/}
                    <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} Top Dog Inc | All rights reserved | Terms of Service | Privacy |
    </p>
                    </div>
                {/* </Container> */}
            </div>

        )
    }
}

export default Footer;