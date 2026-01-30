import React from 'react'
import useDataContext from '../contexts/DataContext'

import PageBanner from '../components/PageBanner'

import WhyChooseUsSection from '../sections/WhyChooseUsSection'
import AboutSection from '../sections/AboutSection'
import StatsSection from "../sections/StatsSection"

const AboutPage = () => {
    const { aboutPage } = useDataContext()
    return (
        <main>
            <PageBanner backgroundImage={aboutPage.pageBannerImage} />
            <AboutSection />
            <StatsSection />
            <WhyChooseUsSection />
        </main>
    )
}

export default AboutPage