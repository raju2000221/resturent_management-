import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Menu from '../Menu/Menu';
import MenuItem from '../Shared/MenuItem/MenuItem';
import Featured from './Featured/Featured';
import Review from './Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Menu></Menu>
            <Featured></Featured>
            <Review></Review>
        </div>
    );
};

export default Home;