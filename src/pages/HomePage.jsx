import React from "react";
import Carousel from "../components/Carousel";
import Banner from "../components/Banner";

import ProductSection from "../sections/ProductSection";
import ServiceSection from "../sections/ServiceSection";
import WhyChooseUsSection from "../sections/WhyChooseUsSection";

const HomePage = () => {
  return (
    <main>
      {/* Hero Section */}
      <Carousel />

      {/* Products Section */}
      <ProductSection />

      {/* Banner / CTA Section */}
      <Banner />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Services Section */}
      <ServiceSection />

    </main>
  );
};

export default HomePage;
