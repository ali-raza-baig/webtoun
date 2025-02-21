import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Components/Buttons/Button'

const AboutSection = () => {
    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden my-8">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap gap-10 justify-evenly">
                        <img alt="ecommerce" className="lg:w-[45%] w-full lg:h-auto h-64 object-cover object-center rounded" src="/images/stats-illustration.svg" />
                        <div className="lg:w-[48%] w-full lg:pl-10 lg:py-6 mx-4 mt-6 lg:mt-0">
                            <h2 className="text-lg title-font py-3 font-bold text-blue-700 tracking-widest">Our Track Rrcords</h2>
                            <h1 className="text-gray-900 text-4xl title-font font-bold mb-1">We have been doing this since <span className='text-blue-700'>1999.</span> </h1>

                            <p className="leading-relaxed font-medium"> At Webtoun, we’re here to help your business thrive online. Based in Glasgow, we specialise in creating bespoke websites, managing your social media, and providing reliable hosting and maintenance services. Our goal is to empower businesses like yours with a strong, impactful online presence tailored to your needs. </p>
                            <dev className="text-gray-600 my-3 font-medium">
                                <div className="container py-4 mx-auto">
                                    <div className="flex flex-wrap -m-4 ">
                                        <div className="p-2 sm:w-1/4 w-1/2">
                                            <h2 className="title-font font-bold sm:text-4xl text-3xl text-gray-900 ">30</h2>
                                            <p className="leading-relaxed text-xl text-blue-700">Clients </p>
                                        </div>
                                        <div className="p-2 sm:w-1/4 w-1/2">
                                            <h2 className="title-font font-bold sm:text-4xl text-3xl text-gray-900 ">120</h2>
                                            <p className="leading-relaxed text-xl text-blue-700">Projects</p>
                                        </div>
                                        <div className="p-2 sm:w-1/4 w-1/2">
                                            <h2 className="title-font font-bold sm:text-4xl text-3xl text-gray-900 ">17</h2>
                                            <p className="leading-relaxed text-xl text-blue-700">Partners</p>
                                        </div>
                                    </div>
                                </div>
                            </dev>
                            <div className="m-2"></div>
                            <Link to={''}> <Button /></Link>

                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default AboutSection