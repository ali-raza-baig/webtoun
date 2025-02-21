import React from 'react'
import Aboutsection from '../Sections/AboutSection'
import Layout from '../Components/Layout/Layout'
import FAQSection from '../Sections/FAQSection'

const AboutPage = () => {
    return (
        <Layout>

            <Aboutsection />


            <form className="relative block p-9 max-w-xs bg-gradient-to-r from-[rgba(2,0,36,0.8)] via-[rgba(24,24,65,0.7)] to-[rgb(20,76,99)] border-2 border-white shadow-[0_0_50px_-15px_rgba(0,212,255,1)] overflow-hidden z-10 rounded-lg">
                <div className="text-lg font-mono font-semibold text-center text-white shadow-md animate-pulse">
                    <span>sign in to your</span>
                </div>
                <div className="block mt-[-0.5rem] text-4xl font-extrabold text-transparent text-center tracking-wide text-stroke text-white shadow-lg">
                    <span>- SPACE -</span>
                </div>
                <div className="relative mt-4">
                    <input placeholder="Email" type="email" className="bg-white p-2 text-sm w-64 border-2 border-white shadow-sm focus:outline-none focus:placeholder-opacity-0 rounded-md" />
                </div>
                <section className="absolute top-0 left-0 w-full h-full -z-20 bg-cover animate-[animateBg_50s_linear_infinite]">
                    <span className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_0_4px_rgba(255,255,255,0.1),0_0_0_8px_rgba(255,255,255,0.1),0_0_20px_rgba(255,255,255,0.1)] animate-[animate_3s_linear_infinite]" />
                </section>
                <div className="relative mt-4">
                    <input placeholder="Password" type="password" className="bg-white p-2 text-sm w-64 border-2 border-white shadow-sm focus:outline-none focus:placeholder-opacity-0 rounded-md" />
                </div>
                <button className="relative block p-2 w-full bg-gradient-to-r from-[#243949] to-[#517fa4] text-white text-sm font-medium uppercase shadow-md hover:shadow-white transition-all duration-200 rounded-md">
                    <span className="relative z-10">Sign in</span>
                </button>
                <p className="text-gray-400 text-sm text-center font-mono mt-4">
                    No account? <a className="text-white hover:underline" href>Sign up!</a>
                </p>
            </form>


        </Layout>
    )
}

export default AboutPage