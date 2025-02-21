import React from 'react'
import Layout from '../Components/Layout/Layout'
import HeroSection from '../Sections/HeroSection'
import AboutSection from '../Sections/AboutSection'
import ServicesSection from '../Sections/ServicesSection'
import PortfolioSection from '../Sections/PortfolioSection'
import ContactSection from '../Sections/ContactSection'
import FAQSection from '../Sections/FAQSection'

const HomePage = () => {
    return (
        <Layout>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <PortfolioSection />
            <FAQSection />
            <ContactSection />
        </Layout>
    )
}

export default HomePage