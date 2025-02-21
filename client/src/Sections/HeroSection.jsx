import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <>
            <div className="flex flex-wrap-reverse justify-evenly p-7">
                <div className="w-full mt-14 lg:w-[38vw]">
                    <div className='text-6xl font-bold py-4 '>
                        <h1>Hire The Best </h1>
                        <h1><span className='text-blue-700'>Marketing </span> Team</h1>
                    </div>
                    <p className='text-lg py-5 pb-10'>Affordable and Professional Digital Marketing Firm from Glasgow Serving Whole United Kingdom. Transform your digital presence and attract more customers effortlessly. Get Your Free Consultation today!</p>

                    <div className="flex items-center border border-gray-300 rounded-full p-1 shadow-sm w-full max-w-md">
                        <input
                            type="email"
                            placeholder="Your E-mail Address"
                            className="flex-1 px- py-4 text-gray-500 bg-transparent outline-none w-full overflow-hidden"
                        />
                        <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-4 py-4 rounded-full">
                            Get Started
                        </button>
                    </div>

                    <div className='mt-10'>
                        <p className='font-bold text-gray-500 mb-3'>Our TRUSTED Customers</p>
                        <img src="/images/customers-logo-strip.png" alt="" />
                    </div>

                </div>
                <div className="w-full  lg:w-[52vw]">
                    <img src="/images/hero.svg" alt="Hero Image" />
                </div>
            </div>
        </>
    )
}

export default HeroSection