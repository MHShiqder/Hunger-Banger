import React from 'react';
import MenuItem from './MenuItem';
import CoverWithImage from './CoverWithImage';

const MenuCategory = ({ img, category, title, subTitle }) => {
    return (
        <div>
            {
                title && <CoverWithImage
                    img={img}
                    title={title}
                    subTitle={subTitle}
                ></CoverWithImage>
            }
            <div className='grid md:grid-cols-2 my-8 gap-10 '>
                {
                    category.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center mb-20'>
            <button className='btn btn-outline border-0 border-b-4 border-black text-black text-lg'>Order Your Favorite Food</button>
            </div>
        </div>
    );
};

export default MenuCategory;