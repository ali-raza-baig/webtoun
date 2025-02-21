import React from 'react'
import ServicesCard from '../Components/Cards/ServicesCard'

const ServicesSection = () => {
    return (
        <>
            <div className="container mx-auto my-7 px-4">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-gray-900">Our Professional <span className='text-blue-700'>Services</span> </h2>
                    <div className="w-16 h-1 bg-blue-700 mx-auto mt-4" />
                </div>
            </div>


            <div className='flex items justify-evenly flex-wrap'>
                <ServicesCard />
                <ServicesCard />
                <ServicesCard />
                <ServicesCard />
                <ServicesCard />
            </div>
        </>
    )
}

export default ServicesSection