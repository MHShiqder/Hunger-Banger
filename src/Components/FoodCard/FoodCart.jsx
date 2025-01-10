import React from 'react';
import Button from '../Button/Button';

const FoodCart = ({item}) => {
    const {name,image,recipe,price}=item;
    return (
        <div>
            <div className="card card-compact rounded-none bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt={name} />
                        <p className='absolute bg-black text-white px-3 py-1 top-3 right-2'>{price}</p>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <Button></Button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;