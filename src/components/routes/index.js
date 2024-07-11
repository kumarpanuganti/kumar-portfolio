import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import Aboutme from "../Aboutme";
import Navbar from "../Navbar";
import MyWork from "../MyWork";
import Contact from "../Contact";
import Footer from "../Footer";

const index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<Aboutme />} />
        <Route path="/my-work" element={<MyWork />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default index;
