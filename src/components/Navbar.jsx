import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";


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
  <li><Link to="/" className="hover:text-sky-300">Home</Link></li>
  <li><Link to="/" className="hover:text-sky-300">About</Link></li>
  <li><Link to="/service" className="hover:text-sky-300">Service</Link></li>
  <li><Link to="/portfolio" className="hover:text-sky-300">Portfolio</Link></li>
  <li>
    <Link
      to="/contact"
      className="border border-white text-white px-4 py-2 rounded-full font-semibold hover:bg-white hover:text-sky-700 transition-all duration-200"
    >
      Contact Us
    </Link>
  </li>
</ul>

      </div>

      {/* Menu mobile */}
      {open && (
  <div className="md:hidden bg-black/60 backdrop-blur-md text-white transition-all duration-300">
    <ul className="flex flex-col items-center gap-4 py-4 font-medium">
      <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
      <li><Link to="/" onClick={() => setOpen(false)}>About</Link></li>
      <li><Link to="/service" onClick={() => setOpen(false)}>Service</Link></li>
      <li><Link to="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link></li>
      <li>
        <Link
          to="/contact"
          onClick={() => setOpen(false)}
          className="border border-white text-white px-4 py-2 rounded-full font-semibold hover:bg-white hover:text-sky-700 transition-all duration-200"
        >
          Contact Us
        </Link>
      </li>
    </ul>
  </div>
)}

    </nav>
  );
};

export default Navbar;
