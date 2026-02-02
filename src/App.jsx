import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { PageContext } from "./contexts/PageContext";

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
  const { pathname } = useLocation();

  const endpoint = pathname.split("/").filter(Boolean).pop() || "home";
  const pageTitle = endpoint.charAt(0).toUpperCase() + endpoint.slice(1);

  return (
    <>
      <ScrollToTop />

      <PageContext.Provider value={pageTitle}>
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
      </PageContext.Provider>

    </>
  );
};

export default App;
