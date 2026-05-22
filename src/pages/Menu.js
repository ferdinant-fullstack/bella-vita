import React from 'react';

function Menu() {
  return (
    <div className="max-w-4xl mx-auto p-8 my-8 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Menuja Jonë</h1>
      <p className="text-lg text-gray-600 mb-8">
        Zgjidhni nga pjatat tona tradicionale dhe speciale.
      </p>
      
      {/* Këtu mund të shtosh listën e pjatave më vonë */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        <div className="p-4 border rounded-lg shadow-sm bg-white">
          <h3 className="text-xl font-semibold text-gray-800">Pica Speciale</h3>
          <p className="text-gray-600">Salcë domate, mocarela, prshutë, kërpudha.</p>
        </div>
        <div className="p-4 border rounded-lg shadow-sm bg-white">
          <h3 className="text-xl font-semibold text-gray-800">Pasta Carbonara</h3>
          <p className="text-gray-600">Pana, pançetë, vezë, djathë kaçkavall.</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;