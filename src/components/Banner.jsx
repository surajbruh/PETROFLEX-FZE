import React from 'react'

const bannerBackgroundImage = "https://images.unsplash.com/photo-1761839258239-2be2146f1605?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const Banner = () => {
    return (
        <section
            aria-labelledby="cta-heading"
            className="relative w-full min-h-[30vh] sm:min-h-[35vh] md:min-h-[40vh] flex items-center"
        >
            {/* Background */}
            <div
                className="absolute inset-0 -z-10 grayscale"
                style={{
                    backgroundImage: `url(${bannerBackgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                role="img"
                aria-label="Business transformation banner background"
            >
                <div
                    className="absolute inset-0 bg-black/60"
                    aria-hidden="true"
                ></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-12 sm:py-16 text-white text-center">
                <div className="max-w-4xl mx-auto space-y-5">
                    <h2
                        id="cta-heading"
                        className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl leading-tight"
                    >
                        Ready to Transform Your Business?
                        <br />
                        Contact Us Today!
                    </h2>

                    <a
                        href="/contact"
                        className="
    inline-flex items-center justify-center
    uppercase px-8 py-3 sm:py-3.5
    text-sm sm:text-base font-medium
    border border-white text-white
    bg-red-500 shadow-md
    hover:bg-white/70 hover:text-red-500 hover:border-red-500
    transition-colors
    focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                        Contact Us Now
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Banner