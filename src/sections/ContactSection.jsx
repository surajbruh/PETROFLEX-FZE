import React from 'react'

import ContactInfo from '../components/ContactInfo'
import ContactForm from '../components/ContactForm'

const ContactSection = () => {
    return (
        <section
            aria-labelledby="why-choose-us-heading"
            className="bg-white"
        >
            <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Content Column */}
                <div className="">
                    <span className="inline-block uppercase font-bold bg-red-600 text-white px-4 py-1 mb-4">
                        contact us
                    </span>

                    <div className="mb-4 space-y-4">
                        <h2
                            id="why-choose-us-heading"
                            className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl leading-tight"
                        >
                            Reach Out to Us
                        </h2>

                        <p className="font-light text-sm sm:text-base md:text-lg">
                            Get in touch with Regas Trading FZE today to discover how we can help drive your business forward.
                        </p>

                    </div>

                    <ContactInfo />

                </div>

                {/* form */}
                <ContactForm />
            </div>
        </section>
    )
}

export default ContactSection