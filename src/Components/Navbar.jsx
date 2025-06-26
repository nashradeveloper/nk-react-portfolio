import React, { useState } from "react";
import { ArrowUp, ArrowUpRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = ["About Me", "Skills", "Projects"];

  return (
    <header className="w-full sticky top-0 z-50 bg-transparent dm-sans">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lime-300 font-bold text-2xl tracking-wide dm-sans">N.K</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-white text-base font-medium">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
              className="hover:text-yellow-400 transition"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <button className="bg-lime-300 text-blue-200 font-medium px-5 py-2 rounded-full hover:bg-yellow-400 transition flex items-center">
            Contact <ArrowUpRight/>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6">
          <nav className="flex flex-col space-y-4 text-white font-medium">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                onClick={toggleMenu}
                className="hover:text-yellow-400 transition"
              >
                {link}
              </a>
            ))}
            <button className="bg-[#ebf94f] text-black px-4 py-2 rounded-full mt-4 hover:bg-yellow-400 transition">
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
