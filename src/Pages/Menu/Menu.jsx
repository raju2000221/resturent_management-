
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuItem from '../Shared/MenuItem/MenuItem';
import useMenu from '../../Hooks/useHooks';

const Menu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular")

    return (
        <div className='mb-10'>
             <SectionTitle
        subHeading ={"from 11.00 am to 10.00 pm"}
        heading={"Order online"}
        >
        </SectionTitle>
        <div className='grid md:grid-cols-2 gap-4'>
            {
                popular.map(item => <MenuItem
                key={item.id}
                item={item}
                ></MenuItem>)
            }
        </div>
        <div className='flex justify-center'>
        <button className='btn btn-outline border-0 border-b-4 mt-4'>view full menu</button>

        </div>
        </div>
    );
};

export default Menu;