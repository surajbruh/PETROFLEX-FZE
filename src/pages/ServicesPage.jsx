import React from 'react'
import useDataContext from '../contexts/DataContext'

import PageBanner from '../components/PageBanner'
import ServiceSection from '../sections/ServiceSection'

const ServicesPage = () => {
    const { servicesPage } = useDataContext()
    return (
        <main>
            <PageBanner backgroundImage={servicesPage.pageBannerImage} />
            <ServiceSection />
        </main>
    )
}

export default ServicesPage