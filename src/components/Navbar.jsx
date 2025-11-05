// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-transparent z-50 transition-all duration-300">
      <div className="container mx-auto px-6 md:px-14 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-10" />
          <h1 className="text-white text-lg md:text-2xl font-semibold whitespace-nowrap">
            PT ADINATA SENTRA TEKNIKA
          </h1>
        </div>

        {/* Tombol hamburger (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-10 text-white font-medium">
          <li><HashLink smooth to="/#home" className="hover:text-sky-300">Home</HashLink></li>
          <li><HashLink smooth to="/#about" className="hover:text-sky-300">About</HashLink></li>
          <li><HashLink smooth to="/#service" className="hover:text-sky-300">Service</HashLink></li>
          <li><HashLink smooth to="/#project" className="hover:text-sky-300">Proyek</HashLink></li>
          <li><HashLink smooth to="/#portfolio" className="hover:text-sky-300">Portfolio</HashLink></li>
          <li>
            <HashLink
              smooth
              to="/#contact"
              className="border border-white text-white px-4 py-2 rounded-full font-semibold hover:bg-white hover:text-sky-700 transition-all duration-200 whitespace-nowrap"
            >
              Contact Us
            </HashLink>
          </li>
        </ul>
      </div>

      {/* Menu mobile (transparan + blur) */}
      {open && (
        <div className="md:hidden bg-black/60 backdrop-blur-md text-white transition-all duration-300">
          <ul className="flex flex-col items-center gap-4 py-4 font-medium">
            <li><HashLink smooth to="/#home" onClick={() => setOpen(false)}>Home</HashLink></li>
            <li><HashLink smooth to="/#about" onClick={() => setOpen(false)}>About</HashLink></li>
            <li><HashLink smooth to="/#service" onClick={() => setOpen(false)}>Service</HashLink></li>
            <li><HashLink smooth to="/#project" onClick={() => setOpen(false)}>Proyek</HashLink></li>
            <li><HashLink smooth to="/#portfolio" onClick={() => setOpen(false)}>Portfolio</HashLink></li>
            <li>
              <HashLink
                smooth
                to="/#contact"
                onClick={() => setOpen(false)}
                className="border border-white text-white px-4 py-2 rounded-full font-semibold hover:bg-white hover:text-sky-700 transition-all duration-200"
              >
                Contact Us
              </HashLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
