import React from "react";
import Accordion from "../components/Accordion";

const WhyChooseUsSection = ({ data }) => {
    return (
        <section
            aria-labelledby="why-choose-us-heading"
            className="bg-white"
        >
            <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Content Column */}
                <div>
                    <span className="inline-block uppercase font-bold bg-red-600 text-white px-4 py-1 mb-4">
                        Why Choose Us
                    </span>

                    <div className="space-y-4">
                        <h2
                            id="why-choose-us-heading"
                            className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl leading-tight"
                        >
                            {data.heading}
                        </h2>

                        <p className="font-light text-sm sm:text-base md:text-lg">
                            {data.description}
                        </p>
                    </div>

                    {/* Accordion Group */}
                    <div className="mt-8">
                        <Accordion
                            label="Key reasons clients trust our trading expertise"
                            items={data.accordionItems}
                        />
                    </div>
                </div>

                {/* Image Column */}
                <div className="relative min-h-[300px] md:min-h-full">
                    <img
                        src={data.imageURL}
                        alt="Professional team supporting global petrochemical and raw material trading operations"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        loading="lazy"
                    />
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUsSection;