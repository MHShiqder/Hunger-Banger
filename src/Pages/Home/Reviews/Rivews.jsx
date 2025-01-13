import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaQuoteLeft } from 'react-icons/fa';

const Rivews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                
            });

    }, [])
    return (
        <div className='my-16'>
            <SectionTitle
                SubHeading={"What Our Clients Say"}
                Heading={"TESTIMONIALS"}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map((review,idx) => <SwiperSlide key={idx}>
                        <div className='flex flex-col items-center mx-24'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <FaQuoteLeft className='text-5xl mt-10'/>
                            <p className='py-8'>
                                {review.details}
                            </p>
                            <h2 className='text-2xl text-orange-400'>{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Rivews;