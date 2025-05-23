import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Product";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6" >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product:id" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </main>
      <Footer />
      </div>
    </HashRouter>
  );
}