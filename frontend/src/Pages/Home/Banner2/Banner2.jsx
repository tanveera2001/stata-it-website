// ProductGrid.js
import React from "react";
import { motion } from "framer-motion";
import pc1 from '../../../assets/Image/images/device/pc1.png';
import pc2 from '../../../assets/Image/images/device/pc2.png';
import pc3 from '../../../assets/Image/images/device/pc3.png';
import pc4 from '../../../assets/Image/images/device/pc4.png';
import pc5 from '../../../assets/Image/images/device/pc5.png';
import pc6 from '../../../assets/Image/images/device/pc6.png';
import pc7 from '../../../assets/Image/images/device/pc7.png';

const ProductCard = ({ image, title, subtitle }) => (
  <motion.div
    className="bg-gray-900 border border-green-500 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl flex-shrink-0 w-64"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 255, 0, 0.4)" }}
  >
    <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />
    <h2 className="text-green-500 text-lg font-semibold">{title}</h2>
    <p className="text-white text-sm mt-2">{subtitle}</p>
  </motion.div>
);

const ProductGrid = () => {
  const products = [
    {
      image: pc1,
      title: "Smart Bulb 10 W",
      subtitle: "Adjustable color and brightness",
    },
    {
      image: pc2,
      title: "Smart Security Lock",
      subtitle: "Secure access with remote control",
    },
    {
      image: pc3,
      title: "Smart Switch",
      subtitle:"Control appliances from your phone",
    },
    {
      image: pc4,
      title: "Smart Video Door Bell",
      subtitle:"Monitor your door remotely",
    },
    {
      image: pc5,
      title: "5-Pin Multi Socket",
      subtitle:"Multiple connections with safety",
    },
    {
      image: pc6,
      title: "5-Pin Multi Socket",
      subtitle:"Multiple connections with safety",
    },
    {
      image: pc7,
      title: "5-Pin Multi Socket",
      subtitle:"Multiple connections with safety",
    },
    {
      image: pc1,
      title: "Smart Bulb 10 W",
      subtitle: "Adjustable color and brightness",
    },
    {
      image: pc2,
      title: "Smart Security Lock",
      subtitle: "Secure access with remote control",
    },
    {
      image: pc5,
      title: "5-Pin Multi Socket",
      subtitle:"Multiple connections with safety",
    },
    {
      image: pc6,
      title: "5-Pin Multi Socket",
      subtitle:"Multiple connections with safety",
    },
  ];

  return (
    <div className="bg-black py-10">
      <div className="text-center text-gray-200">
        <h1 className="text-3xl font-bold text-green-500 mb-2">Enjoy Our Wide Range Of Smart Devices</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover a world of convenience and possibilities as you explore our diverse selection of smart devices.
          From smart speakers to intelligent lighting, we have the perfect solutions to elevate your daily life.
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="overflow-x-auto whitespace-nowrap px-4 mt-10">
        <div className="flex gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
