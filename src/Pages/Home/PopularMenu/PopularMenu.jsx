import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import MenuItem from '../../../Components/MenuItem';

const PopularMenu = () => {
    const [menu,setMenu]=useState([])
    useEffect(()=>{
        fetch("menu.json")
        .then(res=>res.json())
        .then(data=>{
            const popularItem= data.filter(item=>item.category=="popular")
            setMenu(popularItem);
        })
    },[])
    return (
        <div>
            <SectionTitle 
            SubHeading={"Check it out"}
            Heading={"FROM OUR MENU"}
            ></SectionTitle>

            <div className='grid md:grid-cols-2 my-8 gap-10'>
                {
                    menu.map(item=><MenuItem 
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>

        </div>
    );
};

export default PopularMenu;