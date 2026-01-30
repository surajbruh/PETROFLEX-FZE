import React from 'react'

import PageBanner from '../components/PageBanner'

import WhyChooseUsSection from '../sections/WhyChooseUsSection'
import AboutSection from '../sections/AboutSection'
import StatsSection from "../sections/StatsSection"

const AboutPage = () => {
    return (
        <main>
            <PageBanner />
            <AboutSection />
            <StatsSection />
            <WhyChooseUsSection />
        </main>
    )
}

export default AboutPage