import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import ProductListingPage from "./components/ProductListingPage";
import ShoppingCartPage from "./components/ShoppingCartPage";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductListingPage />} />
      <Route path="/cart" element={<ShoppingCartPage />} />
    </Routes>
  </Router>
);

export default App;
