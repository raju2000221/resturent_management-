import React, { useState } from 'react';
import orderCover from '../../assets/shop/banner2.jpg'
import Cover from '../Shared/Cover/Cover';
import { Tab, TabList, Tabs,TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useHooks';
import FoodCard from '../../Components/FoodCard/FoodCard';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories = ['salad', 'Pizza','soup', 'Desert','drinks'];
    const {category} = useParams();
const initialIndex = categories.indexOf(category);
console.log(initialIndex)
console.log(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")
    const drinks = menu.filter(item => item.category === "drinks")
    return (
        <div>
            <Cover img={orderCover} title={"Order Food"}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab> Salad</Tab>
                    <Tab> Pizza</Tab>
                    <Tab> Soup</Tab>
                    <Tab> Dessert</Tab>
                    <Tab> Drinks</Tab>
                </TabList>
                <TabPanel>
                <OrderTab item={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab item={pizza}></OrderTab>
        
                </TabPanel>
                <TabPanel>
                <OrderTab item={soup}></OrderTab>
               
                </TabPanel>
                <TabPanel>
                <OrderTab item={dessert}></OrderTab>
              
                </TabPanel>
                <TabPanel>
                <OrderTab item={drinks}></OrderTab>
                
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;