import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuItem from '../Shared/MenuItem/MenuItem';

const Menu = () => {
    const [menu, setmenu] = useState([]);
    useEffect(() =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item =>item.category === 'popular')
            setmenu(popularItems)
        })
    }, [])
    return (
        <div className='mb-10'>
             <SectionTitle
        subHeading ={"from 11.00 am to 10.00 pm"}
        heading={"Order online"}
        >
        </SectionTitle>
        <div className='grid md:grid-cols-2 gap-4'>
            {
                menu.map(item => <MenuItem
                key={item.id}
                item={item}
                ></MenuItem>)
            }
        </div>
        </div>
    );
};

export default Menu;