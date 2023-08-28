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
        <div className="mx-auto my-8">
            <div class="text-center mb-4">
                <h2 data-aos="flip-left" class="text-2xl font-bold text-gray-800 lg:text-3xl text-center py-6">Discover Property Types</h2>

            </div>
            <Marquee className="overflow-x-hidden" direction='right'>
            <div className='grid md:grid-cols-4 mx-auto gap-3'>
                <div className="card card-compact w-96  bg-base-100 shadow-xl border-2 border-gray-200">
                    <figure className='rounded-xl'><img className="h-72 w-72 mt-6 rounded-xl" src="https://i.ibb.co/L61CQNM/christina-wocintechchat-com-k-Xf-BDl0f-R1-E-unsplash.jpg" alt=" " /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title mx-auto">Selina Akter</h2>
                        <p className="text-gray-300">Agent,Dhaka</p>

                    </div>
                </div>
                {/* Card-2 */}
                <div className="card card-compact w-96  bg-base-100 shadow-xl border-2 border-gray-200">
                    <figure className='rounded-xl'><img className="h-72 w-72 mt-6 rounded-xl" src="https://i.ibb.co/L61CQNM/christina-wocintechchat-com-k-Xf-BDl0f-R1-E-unsplash.jpg" alt=" " /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title mx-auto">Munmun</h2>
                        <p className="text-gray-300">Agent,Chittagong</p>

                    </div>
                </div>
                {/* Card-3 */}
                <div className="card card-compact w-96  bg-base-100 shadow-xl border-2 border-gray-200">
                    <figure className='rounded-xl'><img className="h-72 w-72 mt-6 rounded-xl" src="https://i.ibb.co/L61CQNM/christina-wocintechchat-com-k-Xf-BDl0f-R1-E-unsplash.jpg" alt=" " /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title mx-auto">Israt Jahan</h2>
                        <p className="text-gray-300">Agent,Sylhet</p>

                    </div>
                </div>
                {/*  */}
                <div className="card card-compact w-96  bg-base-100 shadow-xl border-2 border-gray-200 mr-5">
                    <figure className='rounded-xl'><img className="h-72 w-72 mt-6 rounded-xl" src="https://i.ibb.co/L61CQNM/christina-wocintechchat-com-k-Xf-BDl0f-R1-E-unsplash.jpg" alt=" " /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title mx-auto">Sonchita Mahbub</h2>
                        <p className="text-gray-300">Agent,Rajshahi</p>

                    </div>
                </div>
            </div>
            </Marquee>
            {/* Card-1 */}

        </div>


    );
};

export default FeaturedAgent;