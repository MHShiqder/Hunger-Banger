import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../Components/SectionTitle';

const Category = () => {
    return (
        <div>
            <SectionTitle
            SubHeading={"From 11:00am to 10:00pm"}
            Heading={"ORDER ONLINE"}
            ></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-20"
            >
                <SwiperSlide >
                    <img className='w-full' src={slide1} alt="" />
                    <h3 className='uppercase text-3xl font-semibold text-white -mt-16 text-center'>Salad</h3>                
                </SwiperSlide>
                <SwiperSlide >
                    <img className=' w-full' src={slide2} alt="" />
                    <h3 className='uppercase text-3xl font-semibold text-white -mt-16 text-center'>Pizza</h3>                
                </SwiperSlide>
                <SwiperSlide >
                    <img className='w-full' src={slide3} alt="" />
                    <h3 className='uppercase text-3xl font-semibold text-white -mt-16 text-center'>Soup</h3>                
                </SwiperSlide>
                <SwiperSlide >
                    <img className='w-full' src={slide4} alt="" />
                    <h3 className='uppercase text-3xl font-semibold text-white -mt-16 text-center'>Desert</h3>                
                </SwiperSlide>
                <SwiperSlide >
                    <img className='w-full' src={slide5} alt="" />
                    <h3 className='uppercase text-3xl font-semibold text-white -mt-16 text-center'>Salad</h3>                
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Category;