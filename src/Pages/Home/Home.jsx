import React from 'react';
import Banner from './Banner';
import Category from './Category/Category';
import PopularMenu from './PopularMenu/PopularMenu';
import FeaturedItem from './FeaturedItem/FeaturedItem';
import Rivews from './Reviews/Rivews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <FeaturedItem></FeaturedItem>
            <Rivews></Rivews>
        </div>
    );
};

export default Home;