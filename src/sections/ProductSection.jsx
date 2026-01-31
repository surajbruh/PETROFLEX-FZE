import React from "react";
import ProductCard from "../components/ProductCard";

const ProductSection = ({ data }) => {
    return (
        <section
            aria-labelledby="products-heading"
            className="bg-gray-50"
        >
            <div className="container mx-auto px-4 py-14">
                {/* Section Header */}
                <header className="text-center mb-12">
                    <span className="inline-block uppercase font-bold bg-red-600 text-white px-4 py-1 mb-4">
                        Our Products
                    </span>

                    <div className="max-w-4xl mx-auto space-y-4">
                        <h2
                            id="products-heading"
                            className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl leading-tight"
                        >
                            {data.heading}
                        </h2>

                        <p className="font-light text-sm sm:text-base md:text-lg">
                            {data.description}
                        </p>
                    </div>
                </header>

                {/* Product Cards */}
                <div className="grid gap-6 sm:grid-cols-2">
                    {data.products.map((product) => (
                        <ProductCard
                            key={product.href}
                            icon={product.icon}
                            title={product.title}
                            description={product.description}
                            href={product.href}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;