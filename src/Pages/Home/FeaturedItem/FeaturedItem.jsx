import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import featuredImage from "../../../assets/home/featured.jpg"
import "./FeaturedItem.css"

const FeaturedItem = () => {
    return (
        <div className='feature-container my-16 bg-center bg-cover '>
            <div className='bg-black bg-opacity-40  py-8'>
            <div className='text-white'>
            <SectionTitle
                SubHeading={"Check it out"}
                Heading={"Featured Item"}
            ></SectionTitle>
            </div>
            <div className='md:flex  px-36 pb-16 pt-8 items-center justify-center'>
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className='text-white ml-8 space-y-3'>
                    <div>
                        <p>{new Date().toDateString()}</p>
                        <p>WHERE CAN I GET SOME?</p>
                    </div>
                    <p>Indulge in our featured menu, crafted to delight your taste buds with a perfect blend of flavors. Savor seasonal specialties, fresh ingredients, and unique culinary creations, offering a dining experience that’s both memorable and irresistible</p>
                    <button className='btn btn-outline border-0 border-b-4 border-white text-white hover:border-white'>Order Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default FeaturedItem;