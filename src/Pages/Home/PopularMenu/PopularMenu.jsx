import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import MenuItem from '../../../Components/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu]=useMenu()
    const popular=menu.filter(item=>item.category=="popular")
    
    return (
        <div>
            <SectionTitle 
            SubHeading={"Check it out"}
            Heading={"FROM OUR MENU"}
            ></SectionTitle>

            <div className='grid md:grid-cols-2 my-8 gap-10'>
                {
                    popular.map(item=><MenuItem 
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center'>
            <button className='btn btn-outline border-0 border-b-4 border-black text-black'>View Full Menu</button>
            </div>

        </div>
    );
};

export default PopularMenu;