import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import img1 from "../../../assets/home/slide1.jpg"
import img2 from "../../../assets/home/slide2.jpg"
import img3 from "../../../assets/home/slide3.jpg"
import img4 from "../../../assets/home/slide4.jpg"
import img5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
     <section>
        <SectionTitle
        subHeading ={"from 11.00 am to 10.00 pm"}
        heading={"Order online"}
        
        
        
        >
        </SectionTitle>
           <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-10"
      >
        <SwiperSlide>
            <img src={img1} alt="" />
            <h2 className='text-4xl text-white text-center -mt-20'>Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
            <h2 className='text-4xl text-center -mt-20'>Pizzas</h2>

        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
            <h2 className='text-4xl text-center -mt-20'>Soups</h2>

            </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" />
            <h2 className='text-4xl text-center -mt-20'>Desesrts</h2>

            </SwiperSlide>
        <SwiperSlide>
            <img src={img5} alt="" />
            <h2 className='text-4xl text-center -mt-20'>Salads</h2>

            </SwiperSlide>
      
      </Swiper>
     </section>
    );
};

export default Category;