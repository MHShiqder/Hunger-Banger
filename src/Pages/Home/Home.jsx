import React from 'react';
import Banner from './Banner';
import Category from './Category/Category';
import PopularMenu from './PopularMenu/PopularMenu';
import FeaturedItem from './FeaturedItem/FeaturedItem';
import Rivews from './Reviews/Rivews';
import { Helmet } from 'react-helmet';
import DescriptionBanner from './DescriptionBanner/DescriptionBanner';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Hunger Banger</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <DescriptionBanner></DescriptionBanner>
            <PopularMenu></PopularMenu>
            <FeaturedItem></FeaturedItem>
            <Rivews></Rivews>
        </div>
    );
};

export default Home;