import React, { useState, useEffect } from "react";
import { ArrowRight, X, ChevronLeft, ChevronRight, CornerDownRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
    points: [
      "Akurasi data hingga milimeter.",
      "Pemodelan 3D (Point Cloud) yang detail.",
      "Perhitungan Volume (Stockpile) yang presisi.",
    ],
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
    desc: "Pemotretan udara menggunakan UAV untuk pemetaan area luas dengan efisiensi tinggi, ideal untuk perencanaan tata ruang dan infrastruktur.",
    points: [
      "Pemetaan area luas secara cepat.",
      "Ortophoto resolusi tinggi.",
      "DSM/DTM untuk analisis elevasi.",
    ],
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
    points: [
      "Pengukuran Geometrik Jalan.",
      "Perhitungan Cut and Fill.",
      "As-built drawing infrastruktur.",
    ],
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
    points: [
      "Pembuatan Peta Batas Hak Guna Usaha (HGU).",
      "Inventarisasi Tanaman.",
      "Analisis Kesehatan Tanaman.",
    ],
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
    points: [
      "Pengawasan dan Kontrol Volume Batubara.",
      "Monitoring Pergerakan Tanah.",
      "Pemetaan Jalur Pipa.",
    ],
  },
];


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
    if (open) setIndex(0);
  }, [open, service]);

  if (!service) return null;

  const hasPrev = index > 0;
  const hasNext = service?.gallery && index < service.gallery.length - 1;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[120] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        
        >
          <motion.div
            className="bg-white text-gray-800 w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.1, type: "tween" }}
          >
            <div className="grid grid-cols-3 items-center px-4 sm:px-6 py-3 border-b bg-white text-cyan-600">
              <div />
              <h3 className="col-start-2 text-center font-bold text-xl">{service.title}</h3>
              <div className="justify-self-end">
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100 transition text-gray-500 hover:text-gray-900"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-5 gap-0">
              <div className="relative bg-black md:col-span-3">
                <div className="w-full h-72 sm:h-80 md:h-[500px]">
                  <AnimatePresence mode="popLayout">
                    <motion.img
                      key={service.gallery?.[index] || "noimg"}
                      src={service.gallery?.[index]}
                      alt={`${service.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  </AnimatePresence>
                </div>

                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 sm:px-4">
                  <button
                    disabled={!hasPrev}
                    onClick={() => setIndex((i) => Math.max(i - 1, 0))}
                    className={`p-3 rounded-full bg-white/90 hover:bg-white transition shadow-lg ${!hasPrev ? "opacity-40 cursor-not-allowed" : ""}`}
                    aria-label="Prev"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    disabled={!hasNext}
                    onClick={() => setIndex((i) => Math.min(i + 1, (service.gallery?.length || 1) - 1))}
                    className={`p-3 rounded-full bg-white/90 hover:bg-white transition shadow-lg ${!hasNext ? "opacity-40 cursor-not-allowed" : ""}`}
                    aria-label="Next"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {service.gallery?.length > 1 && (
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                    {service.gallery.map((g, i) => (
                      <button
                        key={g + i}
                        onClick={() => setIndex(i)}
                        className={`h-12 w-16 overflow-hidden rounded-lg border-2 transition-all ${i === index ? "border-cyan-400 scale-105 shadow-md shadow-cyan-400/50" : "border-white/50"}`}
                        aria-label={`Thumb ${i + 1}`}
                      >
                        <img src={g} alt="" className="h-full w-full object-cover opacity-80" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="md:col-span-2 px-5 sm:px-6 py-6 md:py-8 flex flex-col justify-between">
                <div className="max-w-md">
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">Deskripsi Layanan</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{service.desc}</p>
                  
                  {service.points?.length > 0 && (
                    <ul className="mt-4 space-y-2 text-sm text-gray-700 text-left">
                      <h4 className="font-semibold text-gray-900 mt-4 mb-2">Keunggulan Utama:</h4>
                      {service.points.map((p, i) => (
                        <motion.li 
                            key={i} 
                            className="flex items-start gap-2"
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.02, duration: 0.3 }}
                        >
                          <CornerDownRight size={16} className="text-cyan-500 mt-0.5 flex-shrink-0" />
                          <span>{p}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-start gap-3">
                  <Link
                    to="/service"
                    className="inline-flex items-center gap-2 bg-cyan-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-cyan-700 transition shadow-lg shadow-cyan-600/30"
                  >
                    Lihat Detail <ArrowRight size={16} />
                  </Link>
                  <a href="/#contact" className="text-sm font-medium text-cyan-700 hover:text-cyan-600 border border-cyan-700/50 py-2 px-4 rounded-lg hover:bg-cyan-50 transition">
                    Hubungi Kami
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const Service = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const openModal = (svc) => {
    setActive(svc);
    setOpen(true);
    document.documentElement.style.overflow = "hidden";
  };
  const closeModal = () => {
    setOpen(false);
    setActive(null);
    document.documentElement.style.overflow = "";
  };
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };


  return (
    <section id="service" className="bg-gradient-to-b from-[#0d1b2a] to-gray-900 text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-cyan-400 font-semibold text-lg uppercase tracking-wider mb-2">
          Service
        </h2>

        <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          We have several services such as
        </h3>

        <p className="text-gray-300 max-w-2xl mb-8">
          Kami menyediakan service seperti Survey Contruction, Pertambangan, Perkebunan,
          Minyak dan Gas.
        </p>

        <Link
          to="/service"
          className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition mb-12 shadow-lg"
        >
          Lihat Semua Layanan <ArrowRight size={18} />
        </Link>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {SERVICES.map((svc) => (
            <motion.button
              key={svc.id}
              onClick={() => openModal(svc)}
              variants={item}
              className="text-left bg-gray-900 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition-all duration-300 border border-white/5 
                         group hover:ring-2 hover:ring-cyan-500 hover:bg-gray-800"
            >
              <div className="relative">
                <img
                  src={svc.cover}
                  alt={svc.title}
                  className="w-full h-40 object-cover opacity-80 group-hover:opacity-100 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition" />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-white tracking-tight">{svc.title}</h4>
                <p className="text-sm text-gray-300 mt-1 line-clamp-2">{svc.desc}</p>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <ServiceModal open={open} onClose={closeModal} service={active} />
    </section>
  );
};

export default Service;