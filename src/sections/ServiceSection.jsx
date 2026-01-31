import React from "react";
import useDataContext from "../contexts/DataContext";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

const ServiceSection = () => {
    const { serviceSection: data } = useDataContext()
    return (
        <section
            aria-labelledby="services-heading"
            className="bg-gray-50"
        >
            <div className="container mx-auto px-4 py-14">
                {/* Section Header */}
                <header className="text-center mb-12">
                    <span className="inline-block uppercase font-bold bg-red-600 text-white px-4 py-1 mb-4">
                        Our Services
                    </span>

                    <div className="max-w-4xl mx-auto space-y-4">
                        <h2
                            id="services-heading"
                            className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl leading-tight"
                        >
                            {data.heading}
                        </h2>

                        <p className="font-light text-sm sm:text-base md:text-lg">
                            {data.description}
                        </p>
                    </div>
                </header>

                {/* Services List */}
                <ul
                    role="list"
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12"
                >
                    {data.services.map((service) => (
                        <li key={service.id}>
                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                href={service.href}
                            />
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <Link
                    to="/services"
                    className="
            mx-auto w-max flex items-center justify-center
            uppercase px-8 py-3 sm:py-3.5
            text-sm sm:text-base font-medium
            border border-white text-white
            bg-red-500 shadow-md
            hover:bg-white hover:text-red-500 hover:border-red-500
            transition-colors
            focus:outline-none focus-visible:ring-2 focus-visible:ring-white
          "
                    aria-label="View all PETROFLEX FZE services"
                >
                    View all services
                </Link>
            </div>
        </section>
    );
};

export default ServiceSection;
