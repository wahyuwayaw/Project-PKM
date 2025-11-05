// src/pages/Homepage.jsx
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Service from "../components/Service";
import Portfolio from "../components/Portfolio"; 
const Homepage = () => {
  const backgroundImageUrl = "/bg.jpg";

  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="min-h-screen bg-black/70">

        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        <section id="service" className="scroll-mt-24">
          <Service />
        </section>

        {/* ⬇️ PORTFOLIO MUNCUL DI SINI */}
        <section id="portfolio" className="scroll-mt-24">
          <Portfolio />
        </section>

      </div>
    </div>
  );
};

export default Homepage;
