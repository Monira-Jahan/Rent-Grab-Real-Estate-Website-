'use client'
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Marquee from "react-fast-marquee";

const FeaturedAgent = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <section>
            <div className="mx-auto my-10">
                <div class="text-center mb-4">
                    <h2 data-aos="flip-left" class="text-2xl font-bold text-gray-800 lg:text-3xl text-center pt-12 pb-3 mb-16 border-b-2 border-primary w-3/5 mx-auto">Our Featured Agent</h2>

                </div>
                <Marquee className="overflow-x-hidden" direction='right'>
                    <div className='grid grid-cols-4 mx-auto gap-3'>
                        <div className="card card-compact w-96  bg-base-100 shadow-xl border-2 border-gray-200">
                            <figure className='rounded-xl'><img className="h-72 w-72 mt-6 rounded-xl" src="https://i.ibb.co/L61CQNM/christina-wocintechchat-com-k-Xf-BDl0f-R1-E-unsplash.jpg" alt=" " /></figure>
                            <div className="card-body text-center">
                                <h2 className="card-title mx-auto">Selina Akter</h2>
                                <p className="text-gray-300">Agent,Dhaka</p>

                            </div>
                        </div>
                        {/* Card-2 */}
                        <div className="card card-compact w-96  bg-base-100 shadow-xl border-2 border-gray-200">
                            <figure className='rounded-xl'><img className="h-72 w-72 mt-6 rounded-xl" src="https://i.ibb.co/Qbbm8HW/annika-palmari-RIt88-XBR3-G0-unsplash.jpghttps://i.ibb.co/TP8YqHs/photo-1580489944761-15a19d654956-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" alt=" " /></figure>
                            <div className="card-body text-center">
                                <h2 className="card-title mx-auto">Munmun</h2>
                                <p className="text-gray-300">Agent,Chittagong</p>

                            </div>
                        </div>
                        {/* Card-3 */}
                        <div className="card card-compact w-96  bg-base-100 shadow-xl border-2 border-gray-200">
                            <figure className='rounded-xl'><img className="h-72 w-72 mt-6 rounded-xl" src="https://i.ibb.co/9gdssdt/jake-nackos-IF9-TK5-Uy-KI-unsplash.jpg" alt=" " /></figure>
                            <div className="card-body text-center">
                                <h2 className="card-title mx-auto">Israt Jahan</h2>
                                <p className="text-gray-300">Agent,Sylhet</p>

                            </div>
                        </div>

                        {/* card-4 */}
                        <div className="card card-compact w-96  bg-base-100 shadow-xl border-2 border-gray-200 mr-5">
                            <figure className='rounded-xl'><img className="h-72 w-72 mt-6 rounded-xl" src="https://i.ibb.co/YR6pMg3/christina-wocintechchat-com-50-Tk-Ca-P8-M3-A-unsplash.jpg" alt=" " /></figure>
                            <div className="card-body text-center">
                                <h2 className="card-title mx-auto">Sonchita Mahbub</h2>
                                <p className="text-gray-300">Agent,Rajshahi</p>

                            </div>
                        </div>
                    </div>
                </Marquee>
                {/* Card-1 */}

            </div>
            <div className='flex bg-blue-700 w-full h-40  rounded-xl mb-4 shadow-xl bg-opacity-90 '>
                <div className='w-1/2 '>
                <h1 className='font-bold text-sm md:text-2xl text-start text-white pt-12 pl-2 md:pl-16'>Become a Real Estate Agent</h1>
                <p className='font-normal text-xs md:text-sm text-white pt-2 pl-2 md:pl-16'>We only work with the best companies around the globe</p>
                </div>
                <div className='pt-12 w-1/2 pl-8 md:pl-96'>
                <button className='btn bg-base-100 text-sm md:text-lg'>Register</button>
                </div>
            </div>
        </section>


    );
};

export default FeaturedAgent;