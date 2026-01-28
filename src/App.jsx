import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
