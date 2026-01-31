import React from "react";
import Carousel from "../components/Carousel";
import Banner from "../components/Banner";

import ProductSection from "../sections/ProductSection";
import ServiceSection from "../sections/ServiceSection";
import WhyChooseUsSection from "../sections/WhyChooseUsSection";

import useDataContext from "../contexts/DataContext";

const HomePage = () => {

  const { homepage } = useDataContext()
  return (
    <main>
      <Carousel hero={homepage.hero} />
      <ProductSection data={homepage.productSection} />
      <Banner data={homepage.banner} />
      <WhyChooseUsSection />
      <ServiceSection />
    </main>
  );
};

export default HomePage;
