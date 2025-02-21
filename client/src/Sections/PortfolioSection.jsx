import React from 'react'
import PortfolioCard from '../Components/Cards/PortfolioCard'

const PortfolioSection = () => {
    return (
        <div className='container flex my-30 justify-center  flex-wrap-reverse'>
            <div className='w-full flex items-center flex-wrap md:w-[55%]'>
                <PortfolioCard />
                <PortfolioCard />
            </div>
            <div className='w-full mt-3 md:w-[35%] '>
                <div className='text-blue-700 font-bold' >Our Portfolio</div>
                <h1 className='text-4xl font-bold'> We've done some <br /> <span className='text-blue-700'>amazing projects.</span> </h1>
                <p className='text-lg mt-4'>At Webtoun, we’re dedicated to helping businesses in Glasgow succeed online. As your trusted digital marketing partner, we create tailored websites and manage your social media with care and precision, acting as an extension of your team.</p>
            </div>
        </div>
    )
}

export default PortfolioSection