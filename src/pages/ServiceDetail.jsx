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
const GIS_POINTS = [
    {
        title: "a. GIS untuk Pendidikan",
        details: ["Memperoleh data & informasi pendidikan", "Analisis 3 core business pendidikan", "Pertimbangan kebijakan & pemerataan sarana"],
    },
    {
        title: "b. Sistem Informasi Kerangka Dasar",
        details: ["Mengelola data kerangka dasar terukur (GPS) untuk pencarian lokasi kerangka, proyeksi, nama surveyor, dll."],
    },
    {
        title: "c. GIS untuk Fasum & Fasos",
        details: ["Mencari lokasi fasum/fasos yang ada", "Menilai kondisi fasum/fasos", "Menghitung jumlah fasum/fasos per wilayah", "Menentukan lokasi tepat untuk pembangunan baru"],
    },
];

// --- DATA DETAIL LAYANAN UTAMA (Ditambahkan imagePath) ---
const CORE_SERVICES_DETAIL = [
    {
        id: "tls3d",
        title: "Survey TLS 3D (Laser Scanning)",
        icon: Factory,
        desc: "Survey menggunakan teknologi Terrestrial Laser Scanning (TLS) untuk akuisisi data spasial (point cloud) dengan akurasi sangat tinggi (milimeter). Ideal untuk pemodelan 3D yang detail dan perhitungan volume yang presisi.",
        points: [
            "Pembuatan Point Cloud 3D dengan akurasi tinggi.",
            "Visualisasi As-Built Drawing infrastruktur dan bangunan.",
            "Pengukuran Deformasi dan pergerakan struktur.",
            "Perhitungan Volume (Stockpile) galian/timbunan yang presisi.",
        ],
        imagePath: "/assets/tls/hasil1.jpg" 
    },
    {
        id: "uav",
        title: "Survey Udara (Drone/UAV)",
        icon: Rss,
        desc: "Layanan pemetaan udara menggunakan Unmanned Aerial Vehicle (UAV) atau Drone untuk cakupan area yang luas dalam waktu singkat. Menghasilkan citra resolusi tinggi (Orthophoto) dan model elevasi digital (DSM/DTM).",
        points: [
            "Pemetaan topografi area yang luas dan sulit dijangkau.",
            "Pembuatan peta dasar dan orthophoto resolusi sangat tinggi.",
            "Monitoring dan inspeksi infrastruktur (jalan, jalur pipa, dll.).",
            "Perhitungan Volume & Area berbasis citra udara (DSM/DTM).",
        ],
        imagePath: "/assets/uav/2.png" 
    },
    {
        id: "jalan",
        title: "Survey Jalan & Infrastruktur",
        icon: Truck,
        desc: "Meliputi pengukuran geometri, elevasi, dan trase jalan untuk mendukung seluruh fase proyek infrastruktur, mulai dari desain awal, pembangunan, hingga pemeliharaan dan inspeksi.",
        points: [
            "Pengukuran Geometri Jalan (Horizontal dan Vertikal Alignments).",
            "Staking-out dan kontrol konstruksi proyek.",
            "Perhitungan Cut and Fill untuk perencanaan anggaran.",
            "Pembuatan As-Built Drawing dan dokumen teknis pembangunan.",
        ],
        imagePath: "/assets/jalan/jalan2.png" // *** GANTI PATH INI ***
    },
    {
        id: "perkebunan",
        title: "Survey Perkebunan",
        icon: Landmark,
        desc: "Layanan survei khusus untuk sektor agrikultur dan perkebunan, mencakup pemetaan batas lahan (HGU), inventarisasi aset, hingga analisis kesehatan tanaman menggunakan teknologi geospasial.",
        points: [
            "Penentuan dan Pembuatan Peta Batas Hak Guna Usaha (HGU).",
            "Inventarisasi jumlah, jenis, dan kondisi aset tanaman.",
            "Analisis kesehatan tanaman dan estimasi hasil panen (yield prediction).",
            "Pengukuran Topografi lahan untuk perencanaan drainase dan irigasi.",
        ],
        imagePath: "/assets//perkebunan/4.jpg" // *** GANTI PATH INI ***
    },
    {
        id: "tambang",
        title: "Survey Pertambangan & Minyak",
        icon: Factory,
        desc: "Menyediakan data topografi, monitoring, dan volume yang krusial untuk kegiatan eksplorasi, eksploitasi, dan keselamatan di lingkungan pertambangan, kilang minyak, dan jalur pipa.",
        points: [
            "Pengawasan dan perhitungan Volume (Stockpile) material tambang.",
            "Monitoring pergerakan tanah (subsidence) dan stabilitas lereng.",
            "Pemetaan jalur pipa (Pipeline Mapping) dan fasilitas kilang.",
            "Penyusunan peta dasar dan peta geologi tambang.",
        ],
        imagePath: "/assets/tambang/1.jpg" // *** GANTI PATH INI ***
    },
];

// --- Komponen ServiceDetail Utama ---

export default function ServiceDetail() {
    
    // NOTE: Placeholder DITINGGALKAN, tapi tidak digunakan di Layanan Inti
    const Placeholder = ({ label = "Contoh Hasil Pemetaan", Icon = MapPin }) => (
        <div className="rounded-xl border-2 border-dashed border-sky-300 bg-sky-50/50 h-48 md:h-56 lg:h-64 flex flex-col items-center justify-center text-sky-600 text-sm p-4">
            <Icon size={32} className="mb-2" />
            <span className="font-semibold">{label}</span>
        </div>
    );

    // Komponen Card untuk Sub-Layanan GIS
    const GisDetailCard = ({ title, details, index }) => (
        <div className="p-5 bg-white rounded-xl border border-gray-200 hover:border-sky-400 transition shadow-sm hover:shadow-md">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                <span className={`text-xl font-extrabold mr-2 text-sky-600`}>{title.split('.')[0]}.</span>
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
    
    // Card untuk Poin Keunggulan Layanan Utama
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

            {/* Intro & Tabel manfaat per bidang */}
            <section className="max-w-6xl mx-auto px-6 mt-8">
                <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-6">RINGKASAN KEGIATAN SURVEI</h2>
                <p className="mt-3 leading-relaxed text-lg text-gray-700 max-w-4xl">
                    Kami memberikan service Survei dan Pemetaan secara maksimal, didukung SDM berpengalaman dan
                    peralatan elektronik/digital. Berikut adalah kegiatan utama yang kami cakup bagi bidang terkait.
                </p>

                {/* Tabel Modern */}
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

            {/* LAYANAN UTAMA (MENGGANTIKAN 1, 2, 3) */}
            <section className="max-w-6xl mx-auto px-6 mt-16">
                <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-8">DETAIL LAYANAN SURVEI INTI</h2>
                
                {CORE_SERVICES_DETAIL.map((service, index) => (
                    <div 
                        key={service.id} 
                        className={`bg-white p-8 rounded-2xl shadow-xl border-t-4 border-sky-500 mb-12`}
                    >
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
                                {/* BARIS 166: PENEMPATAN GAMBAR LAYANAN INTI */}
                                <img
                                    src={service.imagePath} 
                                    alt={service.title}
                                    className="w-full h-auto rounded-xl shadow-lg object-cover border border-gray-200" 
                                    style={{ maxHeight: '256px' }}
                                />
                            </div>
                            
                        </div>
                    </div>
                ))}
            </section>


            {/* LAYANAN TAMBAHAN: GIS */}
            <section className="max-w-6xl mx-auto px-6 mt-16">
                 <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-6">4. GEOGRAPHIC INFORMATION SYSTEM (GIS)</h2>
                <p className="mb-8 leading-relaxed text-lg text-gray-700 max-w-4xl">
                    Sistem untuk mengumpulkan, mengelola, memanipulasi, dan menyajikan informasi spasial beserta atributnya. Kami menyediakan implementasi GIS untuk berbagai sektor sesuai kebutuhan.
                </p>

                {/* Sub-layanan GIS sebagai Grid Card */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {GIS_POINTS.map((item, index) => (
                        <GisDetailCard key={index} title={item.title} details={item.details} Icon={MapPin} />
                    ))}
                    
                    <div className="md:col-span-1 lg:col-span-1 flex items-center justify-center">
                         {/* BARIS 208: PENEMPATAN GAMBAR GIS */}
                        <img
                            src="/assets/services/aplikasi-gis.jpg" // *** GANTI PATH INI ***
                            alt="Ilustrasi Aplikasi GIS"
                            className="w-full h-auto rounded-xl shadow-lg object-cover border border-gray-200" 
                            style={{ maxHeight: '256px' }} 
                        />
                    </div>
                </div>
            </section>

            {/* CTA / Footer mini */}
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