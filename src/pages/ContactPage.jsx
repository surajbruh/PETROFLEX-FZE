import React from 'react'

import PageBanner from '../components/PageBanner'
import GoogleEmbeddedMap from '../components/GoogleEmbeddedMap'
import ContactSection from '../sections/ContactSection'

const ContactPage = () => {
    return (
        <main>
            <PageBanner />
            <ContactSection />
            <GoogleEmbeddedMap />
        </main>
    )
}

export default ContactPage