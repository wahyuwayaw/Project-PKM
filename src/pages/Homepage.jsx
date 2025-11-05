  import React from "react";
  import Hero from "../components/Hero";
  import About from "../components/About";
  import Service from "../components/Service";

const Homepage = () => {
  // Tentukan path gambar Anda (asumsi di folder 'public')
  const backgroundImageUrl = '/bg.jpg';

  return (
    <div 
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      {/* Container untuk Konten Aplikasi (diberi background semi-transparan)
        Ini penting agar komponen anak tidak terganggu oleh gambar background
      */}
      <div className="bg-black/70 min-h-screen"> 
        <Hero />
        <About />
        <Service />
      </div>
    </div>
  );
};

export default Homepage;