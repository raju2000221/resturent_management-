import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import fetured from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed pt-8'>
            <SectionTitle
                subHeading={"Check it out"}
                heading={"Featured Item"}
            >
            </SectionTitle>
            <div className='md: flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-60'>
                <div>
                    <img src={fetured} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2024</p>
                    <p>Where i can get some</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, in dolores! Quia molestiae sit inventore quas assumenda nam laudantium necessitatibus.</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
                
            </div>
        </div>
    );
};

export default Featured;