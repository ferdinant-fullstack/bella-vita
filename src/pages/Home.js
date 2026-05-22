import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-850">
      {/* 1. SEKSIONI HERO */}
      <div className="max-w-4xl mx-auto pt-20 pb-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
          Welcome to Bella Vita
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
          Bella Vita started as a family business, with the simple goal of offering warm hospitality and 
          authentic flavors. Every dish is prepared with passion and fresh ingredients to provide you with 
          an unforgettable dining experience.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 shadow-md">
            Explore Menu
          </button>
          <button className="border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 font-medium py-3 px-6 rounded-md transition duration-300">
            Book a Table
          </button>
        </div>
      </div>

      {/* 2. SEKSIONI "PSE NE" (WHY US) */}
      <div className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-gray-900 mb-12">
            Why Choose Bella Vita?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Karta 1 */}
            <div className="p-6 bg-gray-55 rounded-xl border border-gray-100 text-center shadow-sm">
              <div className="text-3xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Fresh Ingredients</h3>
              <p className="text-gray-650 text-sm">
                We source our vegetables, meats, and spices daily from local organic farms.
              </p>
            </div>

            {/* Karta 2 */}
            <div className="p-6 bg-gray-55 rounded-xl border border-gray-100 text-center shadow-sm">
              <div className="text-3xl mb-4">👨‍🍳</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Expert Chefs</h3>
              <p className="text-gray-650 text-sm">
                Our culinary team brings years of authentic Italian traditions straight to your plate.
              </p>
            </div>

            {/* Karta 3 */}
            <div className="p-6 bg-gray-55 rounded-xl border border-gray-100 text-center shadow-sm">
              <div className="text-3xl mb-4">🍷</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Cozy Atmosphere</h3>
              <p className="text-gray-650 text-sm">
                The perfect setting for family dinners, romantic dates, or celebrating milestones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;