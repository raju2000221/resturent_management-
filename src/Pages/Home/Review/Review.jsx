import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Review = () => {
    const [review, setreview] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/revie')
            .then(res => res.json())
            .then(data => setreview(data))

    }, [])

    return (
        <section>
            <SectionTitle
                subHeading={"What our clint Say"}
                heading={"Testimonials"}
            ></SectionTitle>

            <div>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper mb-10"
                >

                    {
                        review.map(review => <SwiperSlide

                            key={review.id}
                        >
                            <div className='m-24 flex flex-col items-center mx-24 my-16'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className='text-center'>{review.details}</p>
                                <h3 className='text-4xl text-yellow-400'>{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Review;