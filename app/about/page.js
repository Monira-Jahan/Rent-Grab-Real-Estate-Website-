import React from 'react';

const page = () => {
    return (
        <section class="items-center py-20 bg-gray-100 font-poppins dark:bg-gray-800 ">
            <div class="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6">
                <div class="flex flex-wrap items-center">
                    <div class="w-full px-4 mb-10 xl:w-1/2 lg:mb-8">
                        <div class="flex flex-wrap">
                            <div class="w-full px-4 md:w-1/2">
                                <img src="https://i.ibb.co/m95nwr4/photo-1612625376899-c4de74027429-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" alt=""
                                    class="object-cover w-full mb-6 rounded-lg h-80" />
                                <img src="https://i.ibb.co/T0t4N0F/photo-1615873968403-89e068629265-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" alt=""
                                    class="object-cover w-full rounded-lg h-80" />
                            </div>
                            <div class="w-full px-4 md:w-1/2 xl:mt-11">
                                <img src="https://i.ibb.co/DkwXXcN/south-sun-house02-460x300.jpg" alt=""
                                    class="object-cover w-full mb-6 rounded-lg h-80" />
                                <img src="https://i.ibb.co/87mmL9K/photo-1600585154340-be6161a56a0c-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" alt=""
                                    class="object-cover w-full rounded-lg h-80" />
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-4 mb-10 xl:w-1/2 lg:mb-8">
                        <span class="text-lg font-semibold text-blue-500 dark:text-blue-400 ">About us</span>
                        <h2 class="mt-2 mb-4 text-2xl font-bold text-gray-700 dark:text-gray-300">
                            We are providing a better facility
                        </h2>
                        <p class="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                            Starting back in 2020, Rent & Grab has now become the only real estate solutions provider in Bangladesh and its largest transacting real estate company. Combining an unmatched online and offline presence with our incomparable database of information, Rent & Grab  has become the pioneer that caters to the needs of those with real estate queries, whether property search or customization, providing supporting services such as legal, mortgage, and interior to ensure all solutions are under one roof.

                        </p>
                        <p className='mb-4 text-base leading-7 text-gray-500 dark:text-gray-400'> Rent & Grab  utilizes technology to drive solutions for all stakeholders within the real estate industry with the vision to ensure that all Bangladeshis have access to a trusted and secure real estate service provider.
                        </p>

                        <a href="#"
                            class="px-4 py-2 text-gray-100 bg-blue-500 rounded-md dark:bg-blue-400 dark:hover:bg-blue-500 hover:bg-blue-600">
                            Learn more
                        </a>
                    </div>
                </div>
            </div>

            <section class="text-gray-600 body-font bg-base-100 w-full h-full">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4 text-center">
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
                            <p class="leading-relaxed">Houses For Sale</p>
                        </div>
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">250</h2>
                            <p class="leading-relaxed">Open Houses</p>
                        </div>
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">110</h2>
                            <p class="leading-relaxed">House Sold</p>
                        </div>
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">301</h2>
                            <p class="leading-relaxed">Price Reduced</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default page;