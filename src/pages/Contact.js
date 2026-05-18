import React from 'react';

function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Na Kontaktoni / Rezervoni</h1>
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
        <p className="text-gray-700 mb-2">📍 <strong>Adresa:</strong> Rruga Kryesore, Berat</p>
        <p className="text-gray-700 mb-2">📞 <strong>Telefon:</strong> +355 69 XX XX XXX</p>
        <p className="text-gray-700 mb-6">⏰ <strong>Oraret:</strong> 09:00 - 23:00 (Çdo ditë)</p>
      </div>
    </div>
  );
}

export default Contact;