import React from "react";
import { motion } from "framer-motion";
import { FaStethoscope, FaHeartbeat, FaFlask, FaAmbulance } from "react-icons/fa";

// Data layanan utama
const CORE_SERVICES = [
  {
    id: 1,
    title: "1. Pelayanan Kesehatan Umum",
    description:
      "Memberikan pelayanan pemeriksaan, pengobatan, dan konsultasi untuk segala jenis penyakit umum dengan tenaga medis yang kompeten.",
    icon: <FaStethoscope className="text-5xl text-sky-500" />,
  },
  {
    id: 2,
    title: "2. Pelayanan Kesehatan Ibu dan Anak",
    description:
      "Menjamin kesehatan ibu dan anak melalui pemeriksaan kehamilan, imunisasi, dan edukasi kesehatan reproduksi.",
    icon: <FaHeartbeat className="text-5xl text-pink-500" />,
  },
  {
    id: 3,
    title: "3. Pelayanan Laboratorium",
    description:
      "Melakukan pemeriksaan laboratorium dasar untuk mendukung diagnosis penyakit dan pemantauan kondisi pasien.",
    icon: <FaFlask className="text-5xl text-emerald-500" />,
  },
  {
    id: 4,
    title: "4. Pelayanan Gawat Darurat",
    description:
      "Menangani pasien dalam kondisi darurat dengan cepat dan tepat, dilengkapi fasilitas medis yang memadai.",
    icon: <FaAmbulance className="text-5xl text-red-500" />,
  },
];

// Data layanan detail
const CORE_SERVICES_DETAIL = [
  {
    id: 1,
    title: "Pelayanan Kesehatan Umum",
    content:
      "Pelayanan ini meliputi pemeriksaan umum, pengobatan penyakit ringan hingga kronis, serta rujukan ke rumah sakit jika diperlukan.",
    image: "/images/service-umum.jpg",
  },
  {
    id: 2,
    title: "Pelayanan Kesehatan Ibu dan Anak",
    content:
      "Difokuskan untuk menjaga kesehatan ibu hamil, ibu menyusui, serta tumbuh kembang anak melalui pemeriksaan rutin dan imunisasi.",
    image: "/images/service-ibu-anak.jpg",
  },
  {
    id: 3,
    title: "Pelayanan Laboratorium",
    content:
      "Laboratorium kami menyediakan berbagai layanan pemeriksaan darah, urin, dan tes kesehatan lainnya untuk mendukung diagnosis medis.",
    image: "/images/service-lab.jpg",
  },
  {
    id: 4,
    title: "Pelayanan Gawat Darurat",
    content:
      "Menangani berbagai kasus darurat medis dengan cepat, aman, dan efisien, serta memiliki tenaga medis profesional yang siap 24 jam.",
    image: "/images/service-ugd.jpg",
  },
];

const Service = () => {
  return (
    <div className="bg-gray-50 py-20 px-6 lg:px-20" id="services">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-sky-600 mb-4">
          Layanan Kami
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Kami menyediakan berbagai layanan kesehatan yang komprehensif untuk
          mendukung kesejahteraan masyarakat.
        </p>
      </div>

      {/* Layanan utama */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {CORE_SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white shadow-lg rounded-2xl p-8 text-center border-t-4 border-sky-500 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h4 className="font-bold text-gray-900 mb-2 flex items-center justify-center">
              <span className="text-xl font-extrabold mr-2 text-sky-600">
                {service.title.split(".")[0]}.
              </span>
              {service.title.split(". ")[1]}
            </h4>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Layanan detail */}
      <div className="mt-20 space-y-20">
        {CORE_SERVICES_DETAIL.map((service, index) => (
          <motion.div
            key={service.id}
            className={`flex flex-col ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            } bg-white p-8 rounded-2xl shadow-xl border-t-4 border-sky-500 mb-12`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <div className="md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-xl shadow-md w-full max-w-md"
              />
            </div>
            <div className="md:w-1/2 md:pl-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-sky-600 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{service.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Service;
