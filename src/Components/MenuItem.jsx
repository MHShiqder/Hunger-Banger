import React from 'react';

const MenuItem = ({item}) => {
    const {name,image,recipe, price}=item;
    return (
        <div className='flex space-x-5'>
            <img className='w-[100px] h-[90px] rounded-full rounded-ss-none' src={image} alt="" />
            <div>
                <h3 className='uppercase font-bold mb-2'>{name} -------------</h3>
                <p className='text-base'>{recipe}</p>
            </div>
            <p className='text-yellow-500'>{price}</p>
        </div>
    );
};

export default MenuItem;