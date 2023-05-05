import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet, useNavigation } from 'react-router-dom';

const Main = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            <div>{navigation.state === 'loading' && 'Loading...'}</div>
            {/* <Footer></Footer> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Main;