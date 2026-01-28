import React from "react";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  return (
    <main>
      {/* Hero Section */}
      <Carousel />

      {/* Products Section */}
      <section aria-labelledby="products-heading" className="bg-gray-50">
        <div className="container mx-auto px-4 py-14">
          {/* Section Header */}
          <header className="text-center mb-12">
            <span className="inline-block uppercase font-bold bg-red-600 text-white px-4 py-1 mb-4">
              our products
            </span>

            <div className="max-w-4xl mx-auto space-y-4">
              <h2
                id="products-heading"
                className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl leading-tight"
              >
                Empowering industries with advanced materials and equipment
              </h2>

              <p className="font-light text-sm sm:text-base md:text-lg">
                Discover our range of high-quality industrial products, from raw
                materials to heavy machinery and energy resources, all tailored
                to boost efficiency and sustainability in your operations.
              </p>
            </div>
          </header>

          {/* Product Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <ProductCard key={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
