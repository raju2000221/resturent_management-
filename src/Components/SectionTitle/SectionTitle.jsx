import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='md:w-3/12 mx-auto text-center my-8'>
            <p className='text-yellow-600'>---{subHeading}---</p>
            <h3 className='text-3xl uppercase border-y-4 py-3'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;