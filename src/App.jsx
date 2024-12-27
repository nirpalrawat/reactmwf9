import React from "react";
import Home from "./component/Home";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import { Routes, Route } from "react-router-dom";
import Brand from "./component/Brand";
import About from "./component/About";
import Contact from "./component/Contact";
import Carrers from "./component/Carrers";
import Slider from "./component/layout/slider";
import Ourteam from "./component/Ourteam";

function App() {
  return (
    <>
      <Header />
      <Slider />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="brand" element={<Brand />} />
        <Route path="Ourteam" element={<Ourteam/>} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Carrers" element={<Carrers />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
