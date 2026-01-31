import React from 'react'
import useDataContext from '../contexts/DataContext'

import { Link } from "react-router-dom";
import { ChevronsRight } from "lucide-react";

const Sidebar = () => {
    const { footer, petroChemicalsPage } = useDataContext()
    return (
        <aside
            className="space-y-8"
            aria-labelledby="sidebar-products-heading"
        >
            {/* Products List */}
            <div className="shadow-md border border-gray-200">
                <div className="bg-red-500 text-white text-center px-4 py-5">
                    <h3
                        id="sidebar-products-heading"
                        className="uppercase font-semibold text-lg"
                    >
                        Our Products
                    </h3>
                </div>

                <ul className="space-y-3 px-4 py-5">
                    {footer.products.map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.href}
                                className="inline-flex items-center gap-2 text-sm sm:text-base uppercase hover:text-red-500 transition-colors"
                                aria-label={`View ${item.name}`}
                            >
                                <ChevronsRight
                                    className="w-4 h-4 shrink-0"
                                    aria-hidden="true"
                                />
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Sidebar CTA */}
            <section
                aria-labelledby="cta-heading"
                className="relative min-h-[30vh] flex items-center"
            >
                {/* Background */}
                <div
                    className="absolute inset-0 -z-10 grayscale bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${petroChemicalsPage.pageBannerImage})`
                    }}
                    aria-hidden="true"
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                {/* Content */}
                <div className="px-4 py-10 text-white text-center w-full">
                    <div className="space-y-5">
                        <h3
                            id="cta-heading"
                            className="uppercase font-bold text-xl leading-tight"
                        >
                            Ready to transform your business?
                        </h3>

                        <Link
                            to="/contact"
                            className="
      inline-flex items-center justify-center
      uppercase px-6 py-3
      text-sm font-medium
      border border-white text-white
      bg-red-500 shadow-md
      hover:bg-white/70 hover:text-red-500 hover:border-red-500
      transition-colors
      focus:outline-none focus-visible:ring-2 focus-visible:ring-white
    "
                            aria-label="Contact PETROFLEX FZE"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </aside>
    )
}

export default Sidebar