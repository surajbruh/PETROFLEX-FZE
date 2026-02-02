import React from 'react'
import useDataContext from '../contexts/DataContext'

import FeatureGrid from '../components/FeatureGrid'

const AboutSection = () => {
    const { aboutSection } = useDataContext()

    return (
        <section
            aria-labelledby="why-choose-us-heading"
            className="bg-white"
        >
            <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Image Column */}
                <div className="relative min-h-[200px] md:min-h-full">
                    <img
                        src={aboutSection.image}
                        alt="Business professionals collaborating to solve complex challenges"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        loading="lazy"
                    />
                </div>

                {/* Content Column */}
                <div className="space-y-4">
                    <span className="inline-block uppercase font-bold bg-red-600 text-white px-4 py-1">
                        about us
                    </span>

                    <div className="space-y-4">
                        <h2
                            id="why-choose-us-heading"
                            className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl leading-tight"
                        >
                            {aboutSection.heading}
                        </h2>

                        <p className="font-light text-sm sm:text-base md:text-lg">
                            {aboutSection.description}
                        </p>

                    </div>

                    <FeatureGrid />

                    <p className='italic font-light text-xl'>
                        {aboutSection.quote}
                    </p>

                </div>

            </div>
        </section>
    )
}

export default AboutSection