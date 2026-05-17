import React from "react";
import "./App.css";

// Lista e pastër e ushqimeve për restorantin
const foodItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 8,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500",
  },
  {
    id: 2,
    name: "Carbonara Pasta",
    price: 12,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header i thjeshtë për test */}
      <header className="bg-red-600 text-white p-6 shadow-md text-center">
        <h1 className="text-3xl font-bold tracking-wide">Bella Vita Restaurant</h1>
        <p className="text-sm mt-1 opacity-90">Shija e vërtetë e traditës</p>
      </header>

      {/* Menuja e Ushqimeve */}
      <main className="max-w-6xl mx-auto p-8">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-6">Menuja Jonë Kryesore</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {foodItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow p-4 flex items-center space-x-4">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-24 h-24 object-cover rounded-md"
              />
              <div>
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-red-600 font-semibold mt-1">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;