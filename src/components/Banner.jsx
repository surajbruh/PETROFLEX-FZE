import React from "react";
import { Link } from "react-router-dom";

const Banner = ({ data }) => {
    return (
        <section
            aria-labelledby="cta-heading"
            className="relative w-full min-h-[30vh] sm:min-h-[35vh] md:min-h-[40vh] flex items-center"
        >
            {/* Background (decorative) */}
            <div
                className="absolute inset-0 -z-10 grayscale bg-cover bg-center"
                style={{
                    backgroundImage: `url(${data.backgroundImage})`
                }}
                aria-hidden="true"
            >
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-12 sm:py-16 text-white text-center">
                <div className="max-w-4xl mx-auto space-y-5">
                    <h2
                        id="cta-heading"
                        className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl leading-tight"
                    >
                        Looking for reliable petrochemical trading solutions?
                        <br />
                        Get in touch with us today.
                    </h2>

                    <Link
                        to="/contact"
                        className="
              inline-flex items-center justify-center
              uppercase px-8 py-3 sm:py-3.5
              text-sm sm:text-base font-medium
              border border-white text-white
              bg-red-500 shadow-md
              hover:bg-white/70 hover:text-red-500 hover:border-red-500
              transition-colors
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        aria-label="Contact PETROFLEX FZE"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;
