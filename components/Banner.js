'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import banner1 from '../images/featured/banner.jpg';
import banner2 from '../images/featured/banner-1.jpg';
import banner3 from '../images/featured/banner-2.jpg';



const Banner = () => {
    return (

        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper h-[550px] rounded-xl"
        >
            <SwiperSlide>

                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/dbRvLK1/banner.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-5xl font-bold -pl-48 text-white">Find Your New Home</h1>
                            <p className="mb-5 text-white">Let's find a space that's perfect for you.</p>
                            <button className="btn btn-primary text-white">Get Started</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>

                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/WHW64MR/banner-1.jpg)' }}>
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-5xl font-bold -pl-30 text-white">Find Your New Home</h1>
                            <p className="mb-5 text-white">Let's find a space that's perfect for you.</p>
                            <button className="btn btn-primary text-white">Get Started</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/YB24hg5/banner-2.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-5xl font-bold -pl-30 text-white">Find Your New Home</h1>
                            <p className="mb-5 text-white">Let's find a space that's perfect for you.</p>
                            <button className="btn btn-primary text-white">Get Started</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>

    );
};

export default Banner;