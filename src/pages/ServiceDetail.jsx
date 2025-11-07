import React from 'react';
import { MapPin, Rss, Layers, TrendingUp, ChevronRight, MessageSquare, BookOpen, Truck, Landmark, Factory, Users } from 'lucide-react';

// --- DATA UNTUK TABEL RINGKASAN BIDANG (TIDAK DIUBAH) ---
const BIDANG_DATA = [
    ["Pertambangan", "Menghitung volume galian/timbunan; dasar perencanaan engineering; dasar pemetaan geologi & eksplorasi"],
    ["Perkebunan & Kehutanan", "Menentukan batas-batas; dasar perencanaan kebun/hutan"],
    ["Minyak & Gas", "Menentukan jalur pipa; penetapan batas blok minyak & gas"],
    ["Perumahan", "Perencanaan pemukiman & penghitungan galian/timbunan; staking-out kavling"],
    ["Sipil/Konstruksi", "Dasar perencanaan jalan & jembatan; menghitung volume; staking-out jalan"],
    ["Telekomunikasi", "Penentuan perangkat telekomunikasi (tower, STO, R/KP) & rencana pemasangan kabel"],
    ["Daerah/PU", "Perencanaan tata ruang/kota; pengembangan wilayah"],
];

// --- DATA UNTUK SUB-LAYANAN GIS (TIDAK DIUBAH) ---

// --- DATA DETAIL LAYANAN UTAMA (Diubah sesuai isi dokumen) ---
const CORE_SERVICES_DETAIL = [
    {
        id: "topography",
        title: "Pemetaan Topography (Total Station & GPS)",
        icon: Layers,
        desc: "Dengan menggunakan peralatan yang serba elektronis dan digital seperti Total Station dan Global Positioning System, kesalahan dalam pengambilan data serta keakuratan hasil lapangan dapat dipertanggungjawabkan. Pemetaan topografi digunakan untuk berbagai keperluan sesuai dengan tujuan dan manfaat survei.",
        points: [
            "Penggunaan Total Station dan GPS untuk survei topografi dengan akurasi tinggi.",
            "GPS tipe Geodetik untuk peningkatan titik kerangka dasar/ikat.",
            "GPS tipe Navigasi untuk tracking obyek dengan ketelitian di bawah 0,5 meter (jalan, POI, dll).",
            "Memberikan hasil pemetaan akurat sebagai dasar perencanaan dan engineering.",
        ],
        imagePath: "/assets/servicedetail/topography.jpg",
    },
    {
        id: "bathimetri",
        title: "Survei Bathimetri",
        icon: Factory,
        desc: "Layanan survei Bathimetri secara prinsip sama dengan survei topografi, namun diterapkan pada perairan seperti sungai, danau, atau laut. Bertujuan untuk memperoleh data kedalaman dan kontur dasar perairan secara akurat.",
        points: [
            "Pemetaan kedalaman sungai, danau, dan wilayah pesisir.",
            "Menghasilkan peta kontur dasar perairan (bathymetric map).",
            "Mendukung perencanaan pelabuhan, reklamasi, dan navigasi kapal.",
            "Menggunakan echo sounder dan GPS untuk akurasi tinggi.",
        ],
        imagePath: "/assets/servicedetail/bathimetri.png",
    },
    {
        id: "remote_sensing",
        title: "Remote Sensing & Foto Udara",
        icon: Rss,
        desc: "Dengan dukungan perangkat lunak (software) dan pengalaman dalam bidang Remote Sensing serta Foto Udara, kami siap memberikan solusi kebutuhan pemetaan berbasis citra udara dan satelit untuk berbagai bidang aplikasi.",
        points: [
            "Menghasilkan data citra udara resolusi tinggi untuk analisis wilayah.",
            "Mendukung pemetaan tata guna lahan dan pengembangan wilayah/kota.",
            "Digunakan dalam pertanian, kehutanan, perkebunan, hidrologi, dan real estate.",
            "Mendukung studi fenomena global dan pengembangan wilayah pesisir.",
        ],
        imagePath: "/assets/servicedetail/remotesensing.png",
    },
    {
        id: "gis",
        title: "Geographic Information System (GIS)",
        icon: MapPin,
        desc: "Sistem yang digunakan untuk mengumpulkan, mengelola, memanipulasi, dan menyajikan informasi spasial beserta atributnya. GIS menjadi dasar utama dalam pengambilan keputusan berbasis lokasi di berbagai sektor.",
        points: [
            "Membantu pemerintah dan instansi dalam perencanaan wilayah berbasis data spasial.",
            "Menyediakan aplikasi GIS untuk pendidikan, fasilitas umum, dan sistem kerangka dasar.",
            "Memudahkan analisis spasial untuk tata ruang, infrastruktur, dan pengelolaan aset.",
            "Integrasi data spasial dengan teknologi digital untuk efisiensi perencanaan dan monitoring.",
        ],
        imagePath: "/assets/servicedetail/gis.png",
    },
];

// --- KOMPONEN SERVICEDETAIL ---
export default function ServiceDetail() {

    const Placeholder = ({ label = "Contoh Hasil Pemetaan", Icon = MapPin }) => (
        <div className="rounded-xl border-2 border-dashed border-sky-300 bg-sky-50/50 h-48 md:h-56 lg:h-64 flex flex-col items-center justify-center text-sky-600 text-sm p-4">
            <Icon size={32} className="mb-2" />
            <span className="font-semibold">{label}</span>
        </div>
    );

    const GisDetailCard = ({ title, details }) => (
        <div className="p-5 bg-white rounded-xl border border-gray-200 hover:border-sky-400 transition shadow-sm hover:shadow-md">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                <span className="text-xl font-extrabold mr-2 text-sky-600">{title.split('.')[0]}.</span>
                {title.split('. ')[1]}
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
                {details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                        <ChevronRight size={16} className="text-sky-500 mt-0.5 flex-shrink-0 mr-1.5" />
                        {detail}
                    </li>
                ))}
            </ul>
        </div>
    );

    const ServicePointCard = ({ point, Icon }) => (
        <div className="flex items-start p-4 bg-white rounded-xl shadow-lg border-l-4 border-sky-400 hover:shadow-xl transition duration-300">
            <div className="p-2 bg-sky-100 rounded-full text-sky-600 mr-4 flex-shrink-0">
                <Icon size={20} />
            </div>
            <p className="text-sm font-medium text-gray-700">{point}</p>
        </div>
    );

    return (
        <main className="bg-gray-50 text-gray-800 pt-24 pb-20">
            {/* Header */}
            <section className="max-w-6xl mx-auto px-6 mb-10">
                <h1 className="text-4xl font-extrabold text-center text-gray-900 tracking-tight">Service dan Produk</h1>
                <p className="text-center text-gray-600 mt-2 text-sm">
                    Survei & Pemetaan • GIS • Pengolahan Data • Konsultansi Teknis & Konstruksi • Telekomunikasi
                </p>
                <div className="h-0.5 bg-sky-500/50 mt-4 max-w-xs mx-auto" />
            </section>

            {/* RINGKASAN BIDANG */}
            <section className="max-w-6xl mx-auto px-6 mt-8">
                <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-6">RINGKASAN KEGIATAN SURVEI</h2>
                <p className="mt-3 leading-relaxed text-lg text-gray-700 max-w-4xl">
                    Kami memberikan service Survei dan Pemetaan secara maksimal, didukung SDM berpengalaman dan
                    peralatan elektronik/digital. Berikut adalah kegiatan utama yang kami cakup bagi bidang terkait.
                </p>

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

            {/* LAYANAN UTAMA */}
            <section className="max-w-6xl mx-auto px-6 mt-16">
                <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-8">DETAIL LAYANAN SURVEI INTI</h2>

                {CORE_SERVICES_DETAIL.map((service, index) => (
                    <div key={service.id} className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-sky-500 mb-12">
                        <h3 className="text-2xl font-extrabold text-gray-900 flex items-center gap-3 border-b-2 border-gray-100 pb-3 mb-6">
                            <service.icon size={28} className="text-sky-600" />
                            {index + 1}. {service.title}
                        </h3>
                        <div className={`grid md:grid-cols-5 gap-8 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                            <div className="md:col-span-3 space-y-4 text-justify leading-relaxed text-gray-700">
                                <p className="text-lg font-semibold text-gray-800 mb-3">{service.desc}</p>

                                <h4 className="font-bold text-gray-900 mt-6 mb-3">Kegiatan & Keunggulan Utama:</h4>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {service.points.map((point, i) => (
                                        <ServicePointCard key={i} point={point} Icon={ChevronRight} />
                                    ))}
                                </div>

                                <a href="#contact" className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-500 pt-4">
                                    Konsultasi Layanan {service.title} <ChevronRight size={18} />
                                </a>
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

            
            {/* CTA */}
            <section className="max-w-6xl mx-auto px-6 mt-16">
                <div className="rounded-2xl bg-sky-50 border border-sky-200 p-6 md:p-8 flex flex-col md:flex-row items-center gap-4 shadow-xl">
                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-bold text-gray-900">Siap Transformasi Bisnis Anda dengan Data Akurat?</h4>
                        <p className="text-gray-600 mt-1">Hubungi kami untuk konsultasi kebutuhan survei & pemetaan Anda.</p>
                    </div>
                    <a href="#contact" className="ml-auto bg-sky-600 hover:bg-sky-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300">
                        Contact Us Sekarang →
                    </a>
                </div>
            </section>
        </main>
    );
}
