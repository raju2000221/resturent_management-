import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuimg from '../../assets/menu/banner3.jpg'
import desertimg from '../../assets/menu/dessert-bg.jpeg'
import pizzaimg from '../../assets/menu/pizza-bg.jpg'
import MenuItem from '../Shared/MenuItem/MenuItem';
import Menu from '../Menu/Menu';
import useMenu from '../../Hooks/useHooks';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import Menucategory from './MenuCategory/Menucategory';

const MainMenu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")
    const offered = menu.filter(item => item.category === "offered")
    return (
        <div>
            <Helmet>
                <title>Full Menu</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Cover img={menuimg} title={"our menu"}></Cover>
            <SectionTitle
        subHeading ={"Don't Miss it"}
        heading={"Today's Offer"}
        >
        </SectionTitle>
        <Menucategory title={"offerd"} items ={offered}></Menucategory>
        <Menucategory items ={dessert}
        title="Desert"
        coverImg={desertimg}
        ></Menucategory>
        <Menucategory items ={pizza}
        title="Pizza"
        coverImg={pizzaimg}
        ></Menucategory>
        </div>
    );
};

export default MainMenu;