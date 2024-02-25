import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Menu from '../Menu/Menu';
import MenuItem from '../Shared/MenuItem/MenuItem';
import Featured from './Featured/Featured';
import Review from './Review/Review';
import ResturentName from './ResturentName/ResturentName';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
              <Helmet>
                <title>HOME</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <ResturentName></ResturentName>
            <Menu></Menu>
            <Featured></Featured>
            <Review></Review>
        </div>
    );
};

export default Home;