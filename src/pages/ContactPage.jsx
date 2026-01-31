import React from 'react'
import useDataContext from '../contexts/DataContext'

import PageBanner from '../components/PageBanner'
import GoogleEmbeddedMap from '../components/GoogleEmbeddedMap'
import ContactSection from '../sections/ContactSection'

const ContactPage = () => {
    const { contactPage } = useDataContext()
    return (
        <main>
            <PageBanner backgroundImage={contactPage.pageBannerImage} />
            <ContactSection />
            <GoogleEmbeddedMap mapUrl={contactPage.mapURL} />
        </main>
    )
}

export default ContactPage