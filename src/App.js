import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col">
        {/* Navbari shfaqet ne cdo faqe lart */}
        <Navbar />

        {/* Ketu ndryshon kodi varesisht nga faqja ku ndodhemi */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer i thjeshte ne fund */}
        <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} Bella Vita Restaurant. Të gjitha të drejtat e rezervuara.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;