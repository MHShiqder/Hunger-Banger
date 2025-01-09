import React from 'react';
import detailsBg from "../../../assets/home/chef-service.jpg"
import './DescriptionBanner.css'
const DescriptionBanner = () => {
    return (
        <div className='py-20 px-24 description-container bg-fixed bg-center bg-cover'>
            <div className='text-center px-20 py-16 bg-white text-black'>
                <h2 className='text-3xl uppercase mb-4 font-semibold'>Hunger Banger</h2>
                <p>"Indulge in a culinary journey at Hunger Banger! Explore a vibrant menu filled with mouthwatering dishes, crafted to satisfy every craving. From fresh ingredients to bold flavors, our restaurant offers a unique dining experience. Discover the perfect blend of taste and quality in every bite."</p>
            </div>
        </div>
    );
};

export default DescriptionBanner;