import React from "react";
import Carousel from "../components/Carousel";
import Banner from "../components/Banner";

import ProductSection from "../sections/ProductSection";
import ServiceSection from "../sections/ServiceSection";
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

const HomePage = () => {
  return (
    <main>
      {/* Hero Section */}
      <Carousel />

      {/* Products Section */}
      <ProductSection />

      {/* Banner / CTA Section */}
      <Banner />

      {/* breadcrumbs sections */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <span className="inline-block uppercase font-bold bg-red-600 text-white px-4 py-1 mb-4">
              Why Choose Us
            </span>

            <div className="max-w-4xl mx-auto space-y-4">
              <h2
                id="products-heading"
                className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl leading-tight"
              >
                Innovative Solutions for Every Challenge
              </h2>

              <p className="font-light text-sm sm:text-base md:text-lg">
                No matter how complex the problem, we find creative, effective solutions that drive success.
              </p>
            </div>

            <Accordion items={content} />

          </div>

          <div>
            <img
              className="w-full h-full object-cover object-center"
              src={breadBackgrondImage} alt="" />
          </div>

        </div>
      </section>

      {/* Services Section */}
      <ServiceSection />

    </main>
  );
};

export default HomePage;
