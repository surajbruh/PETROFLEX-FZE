import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

import PetroChemicalsPage from "./pages/PetroChemicalsPage";
import CrudeOilPage from "./pages/CrudeOilPage";

const App = () => {
  return (
    <>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} />

        <Route
          path="products/petrochemicals-raw-materials"
          element={<PetroChemicalsPage />}
        />
        <Route
          path="products/crude-oil-trading-abroad"
          element={<CrudeOilPage />}
        />

        <Route path="services" element={<ServicesPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
