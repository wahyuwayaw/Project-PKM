// src/pages/Homepage.jsx
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Service from "../components/Service";

// NOTE: aktifkan smooth scroll di global (opsional)
// Di index.css tambahkan: html { scroll-behavior: smooth; }

const Homepage = () => {
  const backgroundImageUrl = "/bg.jpg"; // pastikan /public/bg.jpg ada

  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* overlay agar teks terbaca di atas bg */}
      <div className="min-h-screen bg-black/70">
        {/* Home / Hero */}
        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        {/* Service */}
        <section id="service" className="scroll-mt-24">
          <Service />
        </section>

        {/* Anchor kosong untuk menu lain agar link nggak jadi /#doang */}
        <section id="project" className="scroll-mt-24"></section>
        <section id="portfolio" className="scroll-mt-24"></section>
        <section id="contact" className="scroll-mt-24"></section>
      </div>
    </div>
  );
};

export default Homepage;
