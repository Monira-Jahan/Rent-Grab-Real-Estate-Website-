'use client'
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Zoom } from 'react-awesome-reveal';
const WorkProcess = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
    <section>
        <div className="mb-4">
            <h1 data-aos="flip-left" className="text-3xl font-bold text-center py-8">How It Works!!</h1>
            
           <Zoom>    
            <div className='grid grid-cols-1 md:grid-cols-4 mx-auto gap-3 ml-12'>
                <div className='border-2 border-gray-200 h-full w-3/4 rounded-xl shadow-xl '>
               <img className="w-10 h-10 mx-auto my-3" src="https://i.ibb.co/yqKKLjn/house.png"/>
                   <h1 className='font-bold text-2xl text-center pb-2'>Find real estate</h1>
                   <p className='text-sm font-medium px-8 pb-3'>Find a dream property.</p>
                </div>
                <div className='border-2 border-gray-200 h-full w-3/4 rounded-xl shadow-xl'>
                <img className="w-12 h-12 mx-auto my-3" src="https://i.ibb.co/XycFPJp/house-2.png"/>
                   <h1 className='font-bold text-2xl text-center pb-2'>Meet The Relator</h1>
                   <p className='text-sm font-medium px-4 pb-3'>Meet With Relator for finalize the property.</p>
  
                </div>
                <div className='border-2 border-gray-200 h-full w-3/4 rounded-xl shadow-xl'>
                <img className="w-12 h-12 mx-auto my-3" src="https://i.ibb.co/GFpp6j1/document.png"/>
                   <h1 className='font-bold text-2xl text-center pb-2'>Documents</h1>
                   <p className='text-sm font-medium px-8 pb-3 text-center'>Finalize the legal Documents.</p>
                </div>
                <div className='border-2 border-gray-200 h-full w-3/4 rounded-xl shadow-xl'>
                <img className="w-10 h-10 mx-auto my-3" src="https://i.ibb.co/bQ0ddsh/key.png"/>
                   <h1 className='font-bold text-2xl text-center pb-2'>Take The Keys</h1>
                   <p className='text-sm font-medium text-center px-8 pb-3'>Take the house key from owner.</p>
                </div>
            </div>
            </Zoom> 
            
        </div>
        
        </section>
    );
};

export default WorkProcess;