import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
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

        <button onClick={() => setOpen(!open)} className="text-white md:hidden">
          {open ? <X size={28}/> : <Menu size={28}/> }
        </button>

        <ul className="hidden md:flex gap-10 text-white font-medium">
          <li><HashLink smooth to="/#home">Home</HashLink></li>
          <li><HashLink smooth to="/#about">About</HashLink></li>
          <li><HashLink smooth to="/#service">Service</HashLink></li>
          <li><HashLink smooth to="/#portfolio">Portfolio</HashLink></li> {/* ⬅ Portfolio di Homepage */}
          <li><HashLink smooth to="/#contact" className="border border-white px-4 py-2 rounded-full">Contact Us</HashLink></li>
        </ul>
      </div>

      {open && (
        <div className="md:hidden bg-black/70">
          <ul className="flex flex-col items-center gap-4 py-4 text-white">
            <li><HashLink smooth to="/#home" onClick={() => setOpen(false)}>Home</HashLink></li>
            <li><HashLink smooth to="/#about" onClick={() => setOpen(false)}>About</HashLink></li>
            <li><HashLink smooth to="/#service" onClick={() => setOpen(false)}>Service</HashLink></li>
            <li><HashLink smooth to="/#portfolio" onClick={() => setOpen(false)}>Portfolio</HashLink></li>
            <li><HashLink smooth to="/#contact" onClick={() => setOpen(false)}>Contact Us</HashLink></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
