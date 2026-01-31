import React from 'react'

import FeatureGrid from '../components/FeatureGrid'

const backgroundImage = "https://images.unsplash.com/photo-1761839258045-6ef373ab82a7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const AboutSection = () => {
    return (
        <section
            aria-labelledby="why-choose-us-heading"
            className="bg-white"
        >
            <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Image Column */}
                <div className="relative min-h-[200px] md:min-h-full">
                    <img
                        src={backgroundImage}
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
                            Your Gateway to Worldwide Trade Efficiency.
                        </h2>

                        <p className="font-light text-sm sm:text-base md:text-lg">
                            Welcome to PETROFLEX FZE, your trusted global trading partner. We specialize in the import, export, and international trading of petrochemicals, polymers, base oils, additives, and industrial raw materials. With a strong focus on quality, compliance, and reliability, we support businesses worldwide by delivering tailored trading solutions that help them succeed in competitive global markets.
                        </p>

                    </div>

                    <FeatureGrid />

                    <p className='italic font-light text-xl'>“Our goal is to not only meet but exceed expectations, fostering long-lasting partnerships built on trust and mutual success.”</p>

                </div>

            </div>
        </section>
    )
}

export default AboutSection