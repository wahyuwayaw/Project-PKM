import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-blue-600 font-semibold text-lg uppercase tracking-wide">
            About
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Most trusted survey
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Adinata Sentra Teknika (ASeT) didirikan pada tahun 1988 oleh para
            ahli di bidang survei, pemetaan, kajian, dan Teknologi Informasi,
            melayani sektor swasta maupun pemerintah. Dengan dukungan SDM
            profesional dan peralatan lengkap, ASeT menyediakan layanan
            keinsinyuran dan konsultansi teknis di berbagai sektor seperti
            pertambangan, konstruksi, dan telekomunikasi, menjadikannya mitra
            strategis bagi klien.
          </p>
        </div>

        {/* Gambar 2 kolom */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/assets/about/survey1.jpg"
              alt="Survey team"
              className="w-full h-[300px] object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/assets/about/survey2.jpg"
              alt="Survey equipment"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
