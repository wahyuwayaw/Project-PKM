// src/pages/ServiceDetail.jsx
export default function ServiceDetail() {
    // Placeholder box reusable
    const Placeholder = ({ label = "Drop image here" }) => (
      <div className="rounded-xl border-2 border-dashed border-gray-300 bg-gray-100/70 h-48 md:h-56 lg:h-64 flex items-center justify-center text-gray-500 text-sm">
        {label}
      </div>
    );
  
    return (
      <main className="bg-slate-300 text-gray-800 pt-24 pb-20">
        {/* Header */}
        <section className="max-w-5xl mx-auto px-6">
          <h1 className="text-3xl font-extrabold text-center">Service dan Produk</h1>
          <p className="text-center text-gray-600 mt-2">
            Survei & Pemetaan • GIS • Pengolahan Data • Konsultansi Teknis & Konstruksi • Telekomunikasi
          </p>
          <div className="h-px bg-gray-200 mt-6" />
        </section>
  
        {/* Intro & Tabel manfaat per bidang */}
        <section className="max-w-5xl mx-auto px-6 mt-8">
          <h2 className="text-xl font-semibold">SURVEI DAN PEMETAAN</h2>
          <p className="mt-3 leading-relaxed text-justify">
            Kami memberikan service Survei dan Pemetaan secara maksimal, didukung SDM berpengalaman dan
            peralatan elektronik/digital. Berikut sebagian manfaat Survei & Pemetaan bagi bidang terkait.
          </p>
  
          <div className="overflow-x-auto mt-6 rounded-xl border">
            <table className="min-w-[700px] w-full text-sm">
              <thead className="bg-sky-600 text-white">
                <tr>
                  <th className="px-3 py-2 text-left">Bidang</th>
                  <th className="px-3 py-2 text-left">Kegunaan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Pertambangan", "Menghitung volume galian/timbunan; dasar perencanaan engineering; dasar pemetaan geologi & eksplorasi"],
                  ["Perkebunan & Kehutanan", "Menentukan batas-batas; dasar perencanaan kebun/hutan"],
                  ["Minyak & Gas", "Menentukan jalur pipa; penetapan batas blok minyak & gas"],
                  ["Perumahan", "Perencanaan pemukiman & penghitungan galian/timbunan; staking-out kavling"],
                  ["Sipil/Konstruksi", "Dasar perencanaan jalan & jembatan; menghitung volume; staking-out jalan"],
                  ["Telekomunikasi", "Penentuan perangkat telekomunikasi (tower, STO, R/KP) & rencana pemasangan kabel"],
                  ["Daerah/PU", "Perencanaan tata ruang/kota; pengembangan wilayah"],
                ].map((row, i) => (
                  <tr key={i} className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-2 border-t">{row[0]}</td>
                    <td className="px-3 py-2 border-t">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
  
        {/* 1. Topography */}
        <section className="max-w-5xl mx-auto px-6 mt-12">
          <h3 className="text-lg md:text-xl font-bold">
            1. PEMETAAN TOPOGRAPHY (TOTAL STATION DAN GPS)
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mt-4 items-start">
            <div className="space-y-3 text-justify leading-relaxed">
              <p>
                Menggunakan peralatan modern (Total Station & GPS Geodetik) untuk akurasi tinggi.
                Kesalahan pengambilan data dan keakuratan data lapangan dapat dipertanggungjawabkan.
              </p>
              <p>
                Digunakan untuk berbagai keperluan: peningkatan titik kerangka dasar/titik ikat,
                tracking objek presisi (&lt; 0.5 m), staking-out, dan lain-lain.
              </p>
            </div>
            <Placeholder />
          </div>
        </section>
  
        {/* 2. Bathimetri */}
        <section className="max-w-5xl mx-auto px-6 mt-12">
          <h3 className="text-lg md:text-xl font-bold">2. SURVEI BATHIMETRI</h3>
          <div className="grid md:grid-cols-2 gap-6 mt-4 items-start">
            <Placeholder />
            <div className="space-y-3 text-justify leading-relaxed">
              <p>
                Prinsipnya sama dengan pemetaan topografi, namun khusus untuk perairan (kedalaman sungai/laut).
                Mendukung pekerjaan normalisasi alur, navigasi, dan perencanaan pelabuhan.
              </p>
            </div>
          </div>
        </section>
  
        {/* 3. Remote Sensing & Foto Udara */}
        <section className="max-w-5xl mx-auto px-6 mt-12">
          <h3 className="text-lg md:text-xl font-bold">3. REMOTE SENSING DAN FOTO UDARA</h3>
          <div className="grid md:grid-cols-2 gap-6 mt-4 items-start">
            <div className="space-y-3 text-justify leading-relaxed">
              <p>
                Dengan software Remote Sensing & Fotoudara, kami menyediakan solusi pemetaan berbasis citra
                untuk perencanaan dan pemantauan wilayah.
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Pemetaan Tata Guna Lahan</li>
                <li>Perencanaan Wilayah/Kota</li>
                <li>Pertanian, Perkebunan, Kehutanan</li>
                <li>Telekomunikasi, Real Estate, Fenomena Global</li>
                <li>Pengembangan Wilayah Pesisir</li>
              </ul>
            </div>
            <Placeholder />
          </div>
        </section>
  
        {/* 4. GIS */}
        <section className="max-w-5xl mx-auto px-6 mt-12">
          <h3 className="text-lg md:text-xl font-bold">4. GEOGRAPHIC INFORMATION SYSTEM (GIS)</h3>
          <div className="grid md:grid-cols-2 gap-6 mt-4 items-start">
            <div className="space-y-4">
              <p className="text-justify leading-relaxed">
                Sistem untuk mengumpulkan, mengelola, memanipulasi, dan menyajikan informasi spasial beserta atributnya.
              </p>
  
              <div>
                <h4 className="font-semibold">a. GIS untuk Pendidikan</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Memperoleh data & informasi pendidikan</li>
                  <li>Analisis 3 core business pendidikan</li>
                  <li>Pertimbangan kebijakan & pemerataan sarana</li>
                </ul>
              </div>
  
              <div>
                <h4 className="font-semibold">b. Sistem Informasi Kerangka Dasar</h4>
                <p className="text-justify">
                  Mengelola data kerangka dasar terukur (GPS) untuk pencarian lokasi kerangka, proyeksi, nama surveyor, dll.
                </p>
              </div>
  
              <div>
                <h4 className="font-semibold">c. GIS untuk Fasum & Fasos</h4>
                <ol className="list-decimal list-inside text-gray-700">
                  <li>Mencari lokasi fasum/fasos yang ada</li>
                  <li>Menilai kondisi fasum/fasos</li>
                  <li>Menghitung jumlah fasum/fasos per wilayah</li>
                  <li>Menentukan lokasi tepat untuk pembangunan baru</li>
                </ol>
              </div>
            </div>
  
            {/* Kolom placeholder kanan, bisa beberapa slot */}
            <div className="space-y-4">
              <Placeholder label="Drop image (GIS 1)" />
              <Placeholder label="Drop image (GIS 2)" />
              <Placeholder label="Drop image (GIS 3)" />
            </div>
          </div>
        </section>
  
        {/* CTA / Footer mini */}
        <section className="max-w-5xl mx-auto px-6 mt-14">
          <div className="rounded-2xl bg-gray-50 border p-6 md:p-8 flex flex-col md:flex-row items-center gap-4">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold">Butuh dokumen teknis/penawaran resmi?</h4>
              <p className="text-gray-600">Hubungi kami untuk konsultasi kebutuhan survei & pemetaan.</p>
            </div>
            <a href="#contact" className="ml-auto bg-sky-600 hover:bg-sky-500 text-white px-5 py-2 rounded-full">
              Contact Us
            </a>
          </div>
        </section>
      </main>
    );
  }
  