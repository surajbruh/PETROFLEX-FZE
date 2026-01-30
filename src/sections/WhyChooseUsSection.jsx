import React from 'react'
import Accordion from "../components/Accordian";

const breadBackgrondImage = "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const content = [
    {
        "id": 1,
        "title": "What services do you offer?",
        "content": "We provide chartering, logistics, product trading, and cargo movement solutions across international markets."
    },
    {
        "id": 2,
        "title": "Do you handle international shipments?",
        "content": "Yes, we operate globally with trusted partners across major ports."
    },
    {
        "id": 3,
        "title": "How can I request a quote?",
        "content": "You can request a quote through our contact page — our team will respond promptly."
    }
]

const WhyChooseUsSection = () => {
    return (
        <section
            aria-labelledby="why-choose-us-heading"
            className="bg-white"
        >
            <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Content Column */}
                <div className="">
                    <span className="inline-block uppercase font-bold bg-red-600 text-white px-4 py-1 mb-4">
                        Why Choose Us
                    </span>

                    <div className="space-y-4">
                        <h2
                            id="why-choose-us-heading"
                            className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl leading-tight"
                        >
                            Innovative Solutions for Every Challenge
                        </h2>

                        <p className="font-light text-sm sm:text-base md:text-lg">
                            No matter how complex the problem, we find creative and effective
                            solutions that drive long-term success.
                        </p>
                    </div>

                    {/* Accordion Group */}
                    <div className="mt-8">
                        <Accordion
                            label="Why choose our services"
                            items={content}
                        />
                    </div>
                </div>

                {/* Image Column */}
                <div className="relative min-h-[300px] md:min-h-full">
                    <img
                        src={breadBackgrondImage}
                        alt="Business professionals collaborating to solve complex challenges"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        loading="lazy"
                    />
                </div>

            </div>
        </section>

    )
}

export default WhyChooseUsSection