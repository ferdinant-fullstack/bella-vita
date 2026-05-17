import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-black text-red-600 tracking-wider">
          BELLA VITA
        </Link>
        
        {/* Linket e Lundrimit */}
        <div className="space-x-6 font-semibold text-gray-700">
          <Link to="/" className="hover:text-red-600 transition">Kreu</Link>
          <Link to="/menu" className="hover:text-red-600 transition">Menuja</Link>
          <Link to="/about" className="hover:text-red-600 transition">Rreth Nesh</Link>
          <Link to="/contact" className="hover:text-red-600 transition">Kontakt</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;