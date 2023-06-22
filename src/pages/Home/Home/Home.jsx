import React from 'react';
import './Home.css'
import Footer from '../../Shared/Footer/Footer';
import Chefs from './Chefs/Chefs';
const Home = () => {
    return (
        <div>
            <div className="home-page">
                <div className="bg-image .bg-secondary-subtle">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="welcome-message text-center text-white">
                                    <h1 className='fw-bolder'>Welcome to <span>Thai Delight</span></h1>
                                    <p className='text-danger fw-bolder'>Find the best  recipes from top chefs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Chefs></Chefs>
            <Footer></Footer>
        </div>

    );
};

export default Home;