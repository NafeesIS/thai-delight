import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-light py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>About Us</h4>
                            <p>At Thai Delight, we are passionate about bringing authentic Thai cuisine to food lovers around the world. Our chefs have spent years perfecting their craft, bringing traditional recipes and flavors to life in every dish they create.</p>
                        </div>
                        <div className="col-md-4">
                            <h4>Contact Us</h4>
                            <p>123 Main Street<br />City, State 12345<br />Phone: 555-555-5555<br />Email: info@example.com</p>
                        </div>
                        <div className="col-md-4">
                            <h4>Follow Us</h4>
                            <ul className="list-unstyled">
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="text-center">
                        <p>&copy; {new Date().getFullYear()} My Website. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;