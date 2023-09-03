'use client'
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Marquee from 'react-fast-marquee';

const Sponsors = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div>
            <div class="text-center mb-4">
                <h2 data-aos="flip-left" class="text-2xl font-bold dark:text-white lg:text-3xl text-center pt-6 pb-3  w-3/5 mx-auto mb-12">Our Partners</h2>

            </div>
            <Marquee>
                <div className='flex pb-10 bg-base-100'>
                    <div className='mx-10 my-4'>
                        <img  className="dark:bg-base-100" src='https://i.ibb.co/n7mnzPN/client-1.png' />
                    </div>
                    <div className='mx-10 my-4'>
                        <img src='https://i.ibb.co/M2nPDWz/client-2.png' />
                    </div>
                    <div className='mx-10 my-4'>
                        <img src='https://i.ibb.co/8NP4nr5/client-3.png' />
                    </div>
                    <div className='mx-10 my-4'>
                        <img src='https://i.ibb.co/ZGbTVML/client-5.png' />
                    </div>
                    <div className='mx-10 my-4'>
                        <img src='https://i.ibb.co/RCGXpyP/client-6.png' />
                    </div>
                    <div className='mx-10 my-4'>
                        <img src='https://i.ibb.co/KrH3ths/client-7.png' />
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Sponsors;