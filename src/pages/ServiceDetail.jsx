import React, { useEffect } from 'react';
import { MapPin, Rss, Layers, ChevronRight, Factory } from 'lucide-react';

// --- DATA ---
const BIDANG_DATA = [
  ["Pertambangan", "Menghitung volume galian/timbunan; dasar perencanaan engineering; dasar pemetaan geologi & eksplorasi"],
  ["Perkebunan & Kehutanan", "Menentukan batas-batas; dasar perencanaan kebun/hutan"],
  ["Minyak & Gas", "Menentukan jalur pipa; penetapan batas blok minyak & gas"],
  ["Perumahan", "Perencanaan pemukiman & penghitungan galian/timbunan; staking-out kavling"],
  ["Sipil/Konstruksi", "Dasar perencanaan jalan & jembatan; menghitung volume; staking-out jalan"],
  ["Telekomunikasi", "Penentuan perangkat telekomunikasi (tower, STO, R/KP) & rencana pemasangan kabel"],
  ["Daerah/PU", "Perencanaan tata ruang/kota; pengembangan wilayah"],
];

const CORE_SERVICES_DETAIL = [
  {
    id: "topography",
    title: "Pemetaan Topography (Total Station & GPS)",
    icon: Layers,
    desc: "Dengan menggunakan peralatan yang serba elektronis dan digital seperti Total Station dan GPS...",
    points: [
      "Survei topografi akurat.",
      "GPS geodetik untuk titik dasar.",
      "GPS navigasi untuk tracking objek.",
      "Hasil akurat untuk perencanaan engineering.",
    ],
    imagePath: "/assets/servicedetail/topography.jpg",
  },
  {
    id: "bathimetri",
    title: "Survei Bathimetri",
    icon: Factory,
    desc: "Survei perairan seperti sungai, danau, dan laut...",
    points: [
      "Pemetaan kedalaman dan kontur dasar laut.",
      "Mendukung perencanaan pelabuhan.",
      "Menggunakan echo sounder & GPS.",
    ],
    imagePath: "/assets/servicedetail/bathimetri.png",
  },
  {
    id: "gis",
    title: "Geographic Information System (GIS)",
    icon: MapPin,
    desc: "GIS untuk pengumpulan dan penyajian informasi spasial.",
    points: [
      "Perencanaan wilayah berbasis data spasial.",
      "Aplikasi GIS untuk instansi & pendidikan.",
      "Analisis spasial untuk infrastruktur.",
    ],
    imagePath: "/assets/servicedetail/gis.png",
  },
];

// --- KOMPONEN UTAMA ---
export default function ServiceDetail() {

  // 🧩 Tambahin efek scroll di sini, bukan di luar
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
  }, []);

  const ServicePointCard = ({ point }) => (
    <div className="flex items-start p-4 bg-white rounded-xl shadow-lg border-l-4 border-sky-400 hover:shadow-xl transition duration-300">
      <div className="p-2 bg-sky-100 rounded-full text-sky-600 mr-4 flex-shrink-0">
        <ChevronRight size={20} />
      </div>
      <p className="text-sm font-medium text-gray-700">{point}</p>
    </div>
  );

  return (
    <main className="bg-gray-50 text-gray-800 pt-24 pb-20 min-h-screen overflow-y-auto">
      {/* HEADER */}
      <section className="max-w-6xl mx-auto px-6 mb-10">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 tracking-tight">Service dan Produk</h1>
        <p className="text-center text-gray-600 mt-2 text-sm">
          Survei & Pemetaan • GIS • Pengolahan Data • Konsultansi Teknis & Konstruksi • Telekomunikasi
        </p>
      </section>

      {/* RINGKASAN */}
      <section className="max-w-6xl mx-auto px-6 mt-8">
        <div className="overflow-x-auto mt-8 shadow-xl rounded-2xl border border-gray-200">
          <table className="min-w-[700px] w-full text-sm">
            <thead className="bg-sky-600/10 text-sky-800">
              <tr>
                <th className="px-4 py-3 text-left font-bold w-1/4">Bidang</th>
                <th className="px-4 py-3 text-left font-bold">Kegunaan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {BIDANG_DATA.map((row, i) => (
                <tr key={i} className="odd:bg-white even:bg-gray-50 hover:bg-sky-50 transition">
                  <td className="px-4 py-3 font-semibold">{row[0]}</td>
                  <td className="px-4 py-3">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* DETAIL */}
      <section className="max-w-6xl mx-auto px-6 mt-16">
        {CORE_SERVICES_DETAIL.map((service, i) => (
          <div key={service.id} className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-sky-500 mb-12">
            <h3 className="text-2xl font-extrabold text-gray-900 flex items-center gap-3 border-b-2 border-gray-100 pb-3 mb-6">
              <service.icon size={28} className="text-sky-600" />
              {i + 1}. {service.title}
            </h3>

            <div className="grid md:grid-cols-5 gap-8 items-start">
              <div className="md:col-span-3 space-y-4 text-justify leading-relaxed text-gray-700">
                <p className="text-lg font-semibold text-gray-800 mb-3">{service.desc}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.points.map((point, j) => (
                    <ServicePointCard key={j} point={point} />
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <img
                  src={service.imagePath}
                  alt={service.title}
                  className="w-full h-auto rounded-xl shadow-lg object-cover border border-gray-200"
                  style={{ maxHeight: '400px' }}
                />
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
