import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-transparent z-50 transition-all duration-300">
      <div className="container mx-auto px-6 md:px-14 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-10" />
          <h1 className="text-white text-lg md:text-2xl font-semibold">
            PT ADINATA SENTRA TEKNIKA
          </h1>
        </div>

        {/* Tombol hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden focus:outline-none"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-10 text-white font-medium">
          <li><a href="#" className="hover:text-sky-300">Home</a></li>
          <li><a href="#about" className="hover:text-sky-300">About</a></li>
          <li><a href="#service" className="hover:text-sky-300">Service</a></li>
          <li><a href="#project" className="hover:text-sky-300">Proyek</a></li>
          <li><a href="#portfolio" className="hover:text-sky-300">Portfolio</a></li>
          <li>
            <a
              href="#contact"
              className="border border-white text-white px-4 py-2 rounded-full font-semibold hover:bg-white hover:text-sky-700 transition-all duration-200"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden bg-black/60 backdrop-blur-md text-white transition-all duration-300">
          <ul className="flex flex-col items-center gap-4 py-4 font-medium">
            <li><a href="#" onClick={() => setOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
            <li><a href="#service" onClick={() => setOpen(false)}>Service</a></li>
            <li><a href="#project" onClick={() => setOpen(false)}>Proyek</a></li>
            <li><a href="#portfolio" onClick={() => setOpen(false)}>Portfolio</a></li>
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="border border-white text-white px-4 py-2 rounded-full font-semibold hover:bg-white hover:text-sky-700 transition-all duration-200"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
