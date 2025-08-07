import React, { useState } from 'react';
import KUET from '../../../assets/Image/KUET.png';
import ROBI from '../../../assets/Image/ROBI.png';
import radisson from '../../../assets/Image/radisson.png';
import Batlogo from '../../../assets/Image/Batlogo.png';
import Rancon from '../../../assets/Image/Rancon.png';
import spa from "../../../assets/Image/spa.png";
import kutir from '../../../assets/Image/kutir.jpg';

const brands = [
  { name: 'KUET', logo: KUET },
  { name: 'ROBI', logo: ROBI },
  { name: 'radisson', logo: radisson },
  { name: 'Batlogo', logo: Batlogo },
  { name: 'Rancon', logo: Rancon },
  { name: 'spa', logo: spa },
  { name: 'kutir', logo: kutir },
];

const Banner7 = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleBrands = showAll ? brands : brands.slice(0, 6);

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div className="bg-gradient-to-b from-green-600 justify-center items-center to-black py-12 px-4 text-center"> {/* Green to black gradient */}
      <h2 className="text-2xl font-semibold text-white mb-8">OUR HAPPY CUSTOMER</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-6 justify-center items-center">
        {visibleBrands.map((brand, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg flex items-center justify-center transition-shadow transform hover:scale-105 duration-300" // Added scale animation
            style={{ width: '180px', height: '180px' }}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-3/4 h-auto object-contain transition-transform duration-300 hover:scale-110" // Logo scaling effect
            />
          </div>
        ))}
      </div>

      {!showAll && (
        <button
          onClick={handleShowAll}
          className="text-sm font-medium text-white border border-white rounded-full py-2 px-6 hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300"
        >
          View All
        </button>
      )}
    </div>
  );
};

export default Banner7;
