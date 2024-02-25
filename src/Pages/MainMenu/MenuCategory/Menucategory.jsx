import React from 'react';
import useMenu from '../../../Hooks/useHooks';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';

const Menucategory = ({items, title,coverImg}) => {

    return (
      
     <div>
        { title && <Cover img={coverImg} title={title}></Cover> }
           <div className='grid md:grid-cols-2 gap-4'>
            {
                items.map(item => <MenuItem
                key={item._id}
                item={item}
                ></MenuItem>)
            }
        </div>
     </div>
       
    );
};

export default Menucategory;