import React from "react";

const projects = [
  {
    title: "Pemetaan Topografi Tambang",
    img: "/assets/project1.jpg",
    client: "PT Bukit Mineral",
    year: "2024",
  },
  {
    title: "Survey Lahan Pembangunan PLTU",
    img: "/assets/project2.jpg",
    client: "PT Energi Nusantara",
    year: "2023",
  },
  {
    title: "GIS & Mapping Infrastruktur Kota",
    img: "/assets/project3.jpg",
    client: "Pemkab Bandung",
    year: "2023",
  },
  {
    title: "Survey Jalur Telekomunikasi Fiber",
    img: "/assets/project4.jpg",
    client: "PT Telkom Akses",
    year: "2022",
  },
];

const Portfolio = () => {
  const backgroundImageUrl = "/bg.jpg";

  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="min-h-screen bg-black/70 py-24 px-6 md:px-20 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-sky-400 font-semibold text-lg uppercase tracking-wide">
              Portfolio
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Proyek & Pengalaman Kami
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Berikut beberapa proyek yang telah kami kerjakan bersama klien dari sektor pertambangan, energi, telekomunikasi, dan pemerintahan.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {projects.map((item, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-white/20"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-white">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-300 mt-1">{item.client}</p>
                  <p className="text-xs text-gray-400">{item.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
