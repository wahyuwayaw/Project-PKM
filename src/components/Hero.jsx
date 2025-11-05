import React from "react";
// Impor gambar menggunakan path relatif dari Hero.jsx ke folder src/assets
import HeroBackground from '../assets/bg.jpg';

const Hero = () => {
  // Sekarang HeroBackground adalah URL yang benar yang dihasilkan oleh Vite

  return (
    <section
      className="relative bg-cover bg-center h-[90vh] flex items-center"
      // Menggunakan variabel HeroBackground yang berisi URL gambar yang benar
      style={{ backgroundImage: `url(${HeroBackground})` }} 
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-white px-10 md:px-20 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Kami Survei <br /> Kami Sajikan
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Menjadi Perusahaan Jasa Konsultansi yang Profesional dan Terpercaya di sisi Kualitas SDM, Pelayanan dan Kinerja Perusahaan.
        </p>
        <a
          href="#about"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;