import React from "react";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";

const bannerBackgroundImage = "https://images.unsplash.com/photo-1761839258239-2be2146f1605?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  "

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

      {/* Banner / CTA Section */}
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
          uppercase px-8 py-3
          text-sm sm:text-base font-medium
          bg-red-500 hover:bg-red-600
          transition-colors
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
