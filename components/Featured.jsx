'use client'
import React from 'react';
import { FaBed } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Featured = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <section>
            <div class="text-center mb-4">
                <h2 data-aos="flip-left" class="text-2xl font-bold text-gray-800 lg:text-3xl text-center pt-12 pb-3 border-b-2 border-primary w-3/5 mx-auto mb-8">Featured Properties</h2>

                <p class="hidden max-w-screen-sm text-gray-500 md:block text-center mx-auto"></p>
            </div>
            <div className=''>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    {/* first Card */}
                    <div className="card card-side bg-base-100 shadow-xl border-2 mx-2 md:mx-0 border-gray-200">
                        <figure><img className="md:w-64  h-52 rounded-xl m-2" src="https://i.ibb.co/T0t4N0F/photo-1615873968403-89e068629265-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" alt=" " /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Single Family House</h2>
                            <p className='text-sm text-gray-400'>Mirpur-10 Dhaka</p>
                            <div className='flex gap-3'>
                            <div className='flex gap-2'>
                                <FaBed/>
                               <p className='text-sm text-gray-400'>3 Beds</p>
                                </div>
                                <p className='text-sm text-gray-400'>2 Baths</p>
                                <p className='text-sm text-gray-400'>1250 sqft</p>

                            </div>
                            <div className='pt-2'>
                                <p className='text-sm text-gray-400'>For Rent</p>
                                <p className=''><span className='text-sm font-bold'>BDT 25,000</span>/month</p>
                            </div>
                            <button className="btn btn-primary text-white">Details</button>

                        </div>
                    </div>
                    {/* Second Card */}
                    <div className="card card-side bg-base-100 shadow-xl border-2 mx-2 md:mx-0 border-gray-200">
                        <figure><img className="md:w-64  h-52 rounded-xl m-2" src="https://i.ibb.co/DkwXXcN/south-sun-house02-460x300.jpg" alt=" " /></figure>
                        <div className="card-body">
                            <h2 className="card-title">South Sun House</h2>
                            <p className='text-sm text-gray-400'>Gulshan, Dhaka</p>
                            <div className='flex gap-3'>
                               <div className='flex gap-2'>
                                <FaBed/>
                               <p className='text-sm text-gray-400'>3 Beds</p>
                                </div>

                                <p className='text-sm text-gray-400'>2 Baths</p>
                                <p className='text-sm text-gray-400'>1250 sqft</p>

                            </div>
                            <div className='pt-2'>
                                <p className='text-sm text-gray-400'>For Sell</p>
                                <p className=''><span className='text-sm font-bold'>BDT 1.23 Crore</span></p>
                            </div>
                            <button className="btn btn-primary text-white">Details</button>

                        </div>
                    </div>
                    {/* Third Card */}
                    <div className="card card-side bg-base-100 shadow-xl border-2 mx-2 md:mx-0 border-gray-200">
                        <figure><img className="md:w-64  h-52 rounded-xl m-2" src="https://i.ibb.co/DkwXXcN/south-sun-house02-460x300.jpg" alt=" " /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Avenue Apartment</h2>
                            <p className='text-sm text-gray-400'>Dhanmondi,Dhaka</p>
                            <div className='flex gap-3'>
                            <div className='flex gap-2'>
                                <FaBed/>
                               <p className='text-sm text-gray-400'>3 Beds</p>
                                </div>

                                <p className='text-sm text-gray-400'>2 Baths</p>
                                <p className='text-sm text-gray-400'>2150 sqft</p>

                            </div>
                            <div className='pt-2'>
                                <p className='text-sm text-gray-400'>For Sell</p>
                                <p className=''><span className='text-sm font-bold'>BDT 2.3 Crore</span></p>
                            </div>
                            <button className="btn btn-primary text-white">Details</button>

                        </div>
                    </div>
                    {/* Fourth Card */}
                    <div className="card card-side bg-base-100 shadow-xl border-2 mx-2 md:mx-0 border-gray-200">
                        <figure><img className="md:w-64  h-52 rounded-xl m-2" src="https://i.ibb.co/DkwXXcN/south-sun-house02-460x300.jpg" alt=" " /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Modern Family House</h2>
                            <p className='text-sm text-gray-400'>Uttara,Dhaka</p>
                            <div className='flex gap-3'>
                                <p className='text-sm text-gray-400'>Apartment</p>
                                <div className='flex gap-2'>
                                <FaBed/>
                               <p className='text-sm text-gray-400'>4 Beds</p>
                                </div>

                                <p className='text-sm text-gray-400'>3 Baths</p>
                                <p className='text-sm text-gray-400'>2150 sqft</p>

                            </div>
                            <div className='pt-2'>
                                <p className='text-sm text-gray-400'>For Rent</p>
                                <p className=''><span className='text-sm font-bold'>BDT 35,000</span>/month</p>
                            </div>
                            <button className="btn btn-primary text-white"> Details</button>

                        </div>
                    </div>
                </div>
            </div>

            <div className='ml-48 mt-6'>
                <button className='btn btn-primary md:mx-96 text-white mb-3'>See More</button>
            </div>
        </section >
    );
};

export default Featured;