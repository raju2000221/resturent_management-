import React from 'react';
import useMenu from '../../../Hooks/useHooks';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const Menucategory = ({items, title,coverImg}) => {

    return (
      
     <div>
        { title && coverImg && <Cover img={coverImg} title={title}></Cover> }
           <div className='grid md:grid-cols-2 gap-4'>
            {
                items.map(item => <MenuItem
                key={item._id}
                item={item}
                ></MenuItem>)
            }
        </div>
        
        <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4">Order Now</button></Link>
     </div>
       
    );
};

export default Menucategory;