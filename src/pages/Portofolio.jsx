import React from "react";

const projects = [
  { title: "Survey Tambang Batu Bara", img: "/assets/porto1.jpg" },
  { title: "Pemetaan Jaringan Jalan", img: "/assets/porto2.jpg" },
  { title: "GIS Infrastruktur Kota", img: "/assets/porto3.jpg" },
];

const Portfolio = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-blue-600 font-semibold text-lg uppercase tracking-wide">
          Portfolio
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-10">
          Our Completed Projects
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((item, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-5 bg-white">
                <h4 className="font-semibold text-lg">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
