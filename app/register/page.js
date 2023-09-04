import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>

            <div class="my-12">
                <img
                    src="https://i.ibb.co/N2MFwgS/sign-up.jpg"
                    class="w-full"
                    alt="Phone image" />
            </div>
            <div className="md:h-[700px] h-[400px] bg-base-100  flex flex-col justify-center sm:py-12 my-8 rounded-xl shadow-xl">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto h-[500px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative bg-white shadow-lg sm:rounded-3xl sm:py-16 px-20 h-[500px]">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold"> Please Register Now</h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 w-full">
                                    <form>
                                        <div className="relative">
                                            <input id="name" name="name" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 mb-6" placeholder="Enter Your Name" />
                                            <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Enter Your Name</label>
                                        </div>
                                        <div className="relative">
                                            <input id="email" name="email" type="email" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 mb-6" placeholder="Email address" />
                                            <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                        </div>
                                        <div className="relative">
                                            <input id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 mb-6" placeholder="Password" />
                                            <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Confirm Password</label>
                                        </div>
                                        <div className="relative">
                                            <input id="photo" name="photo" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 mb-6" placeholder="Email address" />
                                            <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Photo URL</label>


                                        </div>
                                        <div className="relative">
                                            <button className="bg-blue-500 text-white rounded-md px-3 py-1 my-3 mx-auto">Register</button>
                                        </div>
                                    </form>
                                    <p className="font-medium text-sm text-center pb-4">Already Have an Account? Please <Link className="text-primary link-primary" href={"/login"}>Login</Link>!!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;