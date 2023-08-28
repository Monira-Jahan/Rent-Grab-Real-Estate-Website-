'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AvailableCities = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <section className='mb-4 my-8'>
            <div class="text-center mb-4">
                <h2 data-aos="flip-left" class="text-2xl font-bold text-gray-800 lg:text-3xl text-center py-6">We are Available in many cities</h2>

                <p class="hidden max-w-screen-sm text-gray-500 md:block text-center mx-auto"></p>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <a href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                        <img src="https://i.ibb.co/yn3CPvX/photo-1582555599578-5068e6474677-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 bg-opacity-70" />

                        <div
                            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                        </div>

                        <div className='flex flex-col text-center'>
                            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-bold text-center">Dhaka</span>
                            <p className='relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-sm font-medium text-center'>30 Properties</p>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                        <img src="https://i.ibb.co/m95nwr4/photo-1612625376899-c4de74027429-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 bg-opacity-70" />

                        <div
                            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                        </div>

                        <div className='flex flex-col text-center'>
                            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-bold text-center">Chittagong</span>
                            <p className='relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-sm font-medium text-center'>20 Properties</p>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                        <img src="https://i.ibb.co/wrttNxf/photo-1632018197183-6d2d4db44b70-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 bg-opacity-70" />

                        <div
                            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                        </div>

                        <div className='flex flex-col text-center'>
                            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-bold text-center">Sylhet</span>
                            <p className='relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-sm font-medium text-center'>15 Properties</p>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                        <img src="https://i.ibb.co/pb74qwL/photo-1598478254501-222864c06f64-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 bg-opacity-70" />

                        <div
                            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                        </div>

                        <div className='flex flex-col text-center'>
                            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-bold text-center">Rajshahi</span>
                            <p className='relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-sm font-medium text-center'>17 Properties</p>
                        </div>
                    </a>
                </SwiperSlide>

            </Swiper>
        </section>

    );
};

export default AvailableCities;