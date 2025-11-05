// src/components/Service.jsx
import React, { useState, useEffect } from "react";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// ==== DATA LAYANAN (contoh; ganti sesuai aset kamu) ====
const SERVICES = [
  {
    id: "tls3d",
    title: "Survey TLS 3D (Laser Scanning)",
    cover: "/assets/tls/tls.jpg",
    gallery: [
      "/assets/tls/1.jpg",
      "/assets/tls/2.jpg",
      "/assets/tls/3.jpg",
      "/assets/tls/hasil1.jpg",
      "/assets/tls/hasil2.jpg",

    ],
    desc: "Survey menggunakan teknologi TLS (Terrestrial Laser Scanning) untuk akurasi tinggi dalam pemodelan 3D dan perhitungan volume.",
  },
  {
    id: "uav",
    title: "Survey Udara (Drone/UAV)",
    cover: "/assets/uav/1.jpg",
    gallery: [
      "/assets/uav/1.jpg",
      "/assets/uav/2.jpg",
      "/assets/uav/3.jpg",
    ],
    desc: "Pemotretan udara menggunakan UAV untuk pemetaan area luas dengan efisiensi tinggi.",
  },
  {
    id: "jalan",
    title: "Survey Jalan & Infrastruktur",
    cover: "/assets/jalan/1.jpg",
    gallery: [
      "/assets/jalan/1.jpg",
      "/assets/jalan/2.jpg",
      "/assets/jalan/3.jpg",
    ],
    desc: "Survey geometri dan elevasi jalan untuk kebutuhan desain, pembangunan, dan pemeliharaan infrastruktur.",
  },
  {
    id: "perkebunan",
    title: "Survey Perkebunan",
    cover: "/assets/perkebunan/1.jpg",
    gallery: [
      "/assets/perkebunan/1.jpg",
      "/assets/perkebunan/2.jpg",
      "/assets/perkebunan/3.jpg",
    ],
    desc: "Pengukuran lahan perkebunan untuk batas area, potensi hasil, dan efisiensi tata guna lahan.",
  },
  {
    id: "tambang",
    title: "Survey Pertambangan & Minyak",
    cover: "/assets/tambang/1.jpg",
    gallery: [
      "/assets/tambang/1.jpg",
      "/assets/tambang/2.jpg",
      "/assets/tambang/3.jpg",
    ],
    desc: "Survey topografi tambang, kilang, dan jalur pipa minyak untuk mendukung perencanaan dan evaluasi produksi.",
  },
];


// ==== MODAL KOMPONEN ====
function ServiceModal({ open, onClose, service }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => Math.min(i + 1, (service?.gallery?.length || 1) - 1));
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(i - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, service]);

  useEffect(() => {
    // reset index saat buka modal baru
    if (open) setIndex(0);
  }, [open, service]);

  if (!open || !service) return null;

  const hasPrev = index > 0;
  const hasNext = index < service.gallery.length - 1;

  return (
    <div
      className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white text-gray-800 w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b">
          <h3 className="font-semibold text-lg">{service.title}</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="grid md:grid-cols-2 gap-0">
          {/* GALERI */}
          <div className="relative bg-black">
            {/* Gambar utama */}
            <img
              src={service.gallery[index]}
              alt={`${service.title} ${index + 1}`}
              className="w-full h-72 sm:h-80 md:h-[420px] object-cover"
            />

            {/* Tombol nav kiri/kanan */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-3">
              <button
                disabled={!hasPrev}
                onClick={() => setIndex((i) => Math.max(i - 1, 0))}
                className={`p-2 rounded-full bg-white/90 hover:bg-white transition shadow ${!hasPrev ? "opacity-40 cursor-not-allowed" : ""}`}
                aria-label="Prev"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                disabled={!hasNext}
                onClick={() => setIndex((i) => Math.min(i + 1, service.gallery.length - 1))}
                className={`p-2 rounded-full bg-white/90 hover:bg-white transition shadow ${!hasNext ? "opacity-40 cursor-not-allowed" : ""}`}
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 bg-black/40 px-2 py-1 rounded-lg">
              {service.gallery.map((g, i) => (
                <button
                  key={g}
                  onClick={() => setIndex(i)}
                  className={`h-10 w-14 overflow-hidden rounded border ${i === index ? "border-white" : "border-white/40"}`}
                  aria-label={`Thumb ${i + 1}`}
                >
                  <img src={g} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* DESKRIPSI */}
          <div className="p-5 sm:p-6">
            <p className="text-sm text-gray-700 leading-relaxed">{service.desc}</p>
            {service.points?.length > 0 && (
              <ul className="mt-3 space-y-2 text-sm list-disc list-inside text-gray-700">
                {service.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            )}

            {/* CTA opsional */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                to="/service"
                className="inline-flex items-center gap-2 bg-sky-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-sky-500 transition"
              >
                Lihat detail layanan <ArrowRight size={16} />
              </Link>
              <a
                href="/#contact"
                className="text-sm font-medium text-sky-700 hover:text-sky-600"
              >
                Hubungi kami →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==== HALAMAN SECTION SERVICE ====
const Service = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const openModal = (svc) => {
    setActive(svc);
    setOpen(true);
    // Kunci scroll body
    document.documentElement.style.overflow = "hidden";
  };
  const closeModal = () => {
    setOpen(false);
    setActive(null);
    document.documentElement.style.overflow = "";
  };

  return (
    <section id="service" className="bg-black text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-blue-500 font-semibold text-lg uppercase tracking-wide">
          Service
        </h2>

        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          We have several services such as
        </h3>

        <p className="text-gray-300 max-w-2xl mb-8">
          Kami menyediakan service seperti Survey Contruction, Pertambangan, Perkebunan,
          Minyak dan Gas.
        </p>

        {/* Learn more ke halaman /service */}
        <Link
          to="/service"
          className="inline-flex items-center gap-2 bg-white text-black font-semibold py-2 px-5 rounded-full hover:bg-gray-200 transition mb-12"
        >
          Learn more <ArrowRight size={18} />
        </Link>

        {/* GRID KARTU */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {SERVICES.map((svc) => (
            <button
              key={svc.id}
              onClick={() => openModal(svc)}
              className="text-left bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition border border-white/5 group"
            >
              <div className="relative">
                <img
                  src={svc.cover}
                  alt={svc.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-white">{svc.title}</h4>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">{svc.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <ServiceModal open={open} onClose={closeModal} service={active} />
    </section>
  );
};

export default Service;
