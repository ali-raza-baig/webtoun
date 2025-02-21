import Button from '../Buttons/Button'
import React from 'react'
import { Link } from 'react-router-dom'

const ServicesCard = () => {
    return (
        <>
            <div className="bg-white shadow-lg rounded-lg p-6 border-b-4 border-blue-500 border-dashed text-center m-3 w-full md:w-[25%]">
                <div className="text-blue-500 mb-4">
                    <img src="/images/video.svg" className='w-[20%] mx-auto' alt="" />
                </div>
                <h4 className="text-2xl font-bold text-blue-700 mb-4">Social Engagement</h4>
                <p className="text-gray-600 pb-4">We can help you to create and manage social media campaigns that will engage your audience and promote your brand.</p>
                <Link><Button /></Link>
            </div>
        </>
    )
}

export default ServicesCard