import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Root = () => {
    const currentLocation = useLocation()
    const noHeaderFooter = currentLocation.pathname.includes('login') || currentLocation.pathname.includes('signIn')
    return (
        <div className='max-w-screen-lg mx-auto'>

            {
                noHeaderFooter || <Header></Header>
            }
            <Outlet></Outlet>
            {
                noHeaderFooter || <Footer></Footer>
            }
        </div>
    );
};

export default Root;