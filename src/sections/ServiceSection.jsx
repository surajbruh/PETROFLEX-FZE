import React from 'react'
import ServiceCard from '../components/ServiceCard';

const services = [
    {
        id: 1,
        title: "Raw Materials and Petrochemicals",
        description:
            "Supplying essential raw materials and petrochemicals with reliable global logistics.",
        href: "/services/raw-materials",
    },
    {
        id: 2,
        title: "Industrial Equipment & Machinery",
        description:
            "Providing advanced machinery solutions to enhance operational efficiency.",
        href: "/services/industrial-equipment",
    },
    {
        id: 3,
        title: "Energy Resources & Logistics",
        description:
            "Ensuring consistent energy supply with optimized transportation and delivery.",
        href: "/services/energy-logistics",
    },
];

const ServiceSection = () => {
    return (
        <section
            aria-labelledby="services-heading"
            className="bg-gray-50"
        >
            <div className="container mx-auto px-4 py-14">
                {/* Section Header */}
                <header className="text-center mb-12">
                    <span className="inline-block uppercase font-bold bg-red-600 text-white px-4 py-1 mb-4">
                        our services
                    </span>

                    <div className="max-w-4xl mx-auto space-y-4">
                        <h2
                            id="services-heading"
                            className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl leading-tight"
                        >
                            Streamlining Success Across the Globe
                        </h2>

                        <p className="font-light text-sm sm:text-base md:text-lg">
                            We offer a comprehensive suite of services tailored to enhance and
                            streamline your business operations worldwide.
                        </p>
                    </div>
                </header>

                {/* Services List */}
                <ul
                    role="list"
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12"
                >
                    {services.map((service) => (
                        <li key={service.id}>
                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                href={service.href}
                            />
                        </li>
                    ))}
                </ul>

                <a
                    href="/services"
                    className="mx-auto w-max
    flex items-center justify-center
    uppercase px-8 py-3 sm:py-3.5
    text-sm sm:text-base font-medium
    border border-white text-white
    bg-red-500 shadow-md
    hover:bg-white hover:text-red-500 hover:border-red-500
    transition-colors
    focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                    view all services
                </a>

            </div>
        </section>
    )
}

export default ServiceSection