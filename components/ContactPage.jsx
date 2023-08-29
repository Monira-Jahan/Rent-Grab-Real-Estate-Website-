import React from 'react';

const ContactPage = () => {
    return (
        <section className='mx-auto'>
            <div className="hero min-h-screen  rounded-xl" style={{ backgroundImage: 'url(https://i.ibb.co/nbq9YQT/bg.jpg)' }}>

                <div className="hero-overlay bg-opacity-60"></div>
                
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left  text-white md:px-8">
                        <h1 className="text-5xl font-bold">Make An Enquiry</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-gray-400 md:mt-20 md:ml-12 bg-opacity-60">
                        <div className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-white">Your Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-white">Your Email</span>
                                </label>
                                <input type="text" placeholder="Your Email" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-white">Your Phone Number</span>
                                </label>
                                <input type="number" placeholder="Your Phone Number" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
               


            </div>
        </section>

    );
};

export default ContactPage;