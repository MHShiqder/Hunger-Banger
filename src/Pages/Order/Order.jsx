import React, { useState } from 'react';
import CoverWithImage from '../../Components/CoverWithImage';
import imageCover from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCart from '../../Components/FoodCard/FoodCart';
import useMenu from '../../Hooks/useMenu';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories=['salad','pizza','soup','dessert','drinks']
    const {category}=useParams()
    const initialIndex=categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu()
console.log(category)
    const salad = menu.filter(item => item.category == "salad")
    const drinks = menu.filter(item => item.category == "drinks")
    const dessert = menu.filter(item => item.category == "dessert")
    const pizza = menu.filter(item => item.category == "pizza")
    const soup = menu.filter(item => item.category == "soup")
    return (

        <div>
            <CoverWithImage title={"Order Food"} subTitle={"Satisfy your cravings with a seamless food ordering experience. Browse  and enjoy delivery right to your doorstep. Delicious meals are just a click away!"} img={imageCover}></CoverWithImage>

            <div className='my-10 text-center'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <div className='grid md:grid-col lg:grid-cols-3 gap-7 my-10'>
                            {
                                salad.map((item,idx)=><FoodCart key={idx} item={item} ></FoodCart>)
                            }
                        </div>

                    </TabPanel>
                    <TabPanel>
                    <div className='grid md:grid-col lg:grid-cols-3 gap-7 my-10'>
                            {
                                dessert.map((item,idx)=><FoodCart key={idx} item={item} ></FoodCart>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid md:grid-col lg:grid-cols-3 gap-7 my-10'>
                            {
                                soup.map((item,idx)=><FoodCart key={idx} item={item} ></FoodCart>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid md:grid-col lg:grid-cols-3 gap-7 my-10'>
                            {
                                pizza.map((item,idx)=><FoodCart key={idx} item={item} ></FoodCart>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid md:grid-col lg:grid-cols-3 gap-10 my-10'>
                            {
                                drinks.map((item,idx)=><FoodCart key={idx} item={item} ></FoodCart>)
                            }
                        </div>
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default Order;