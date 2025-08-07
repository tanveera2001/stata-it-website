import React, { useState } from 'react';
import img3 from '../../../assets/Image/img3.jpg';
import img4 from '../../../assets/Image/img4.jpg';
import img5 from '../../../assets/Image/img5.jpg';
import img6 from '../../../assets/Image/img6.jpg';
import img7 from '../../../assets/Image/img7.jpg';
import img8 from '../../../assets/Image/img8.jpg';

const Banner5 = () => {
  const [selectedItem, setSelectedItem] = useState({
    title: "",
    imgSrc: img8,
  });

  // Data for each item
  const items = [
    {
      title: "Door Bell",
      imgSrc: img3,
      text: "Smart Video Door Bell ",
    },
    {
      title: "RGB Lights",
      imgSrc: img4,
      text: "RGB Lights",
    },
    {
      title: "LED BULB",
      imgSrc: img5,
      text: "STATA LED BULB",
    },
    {
      title: "VIDEO DOOR BELL",
      imgSrc: img6,
      text: "STATA VIDEO DOOR BELL",
    },
    {
      title: " BULB 10W",
      imgSrc: img7, 
      text: "SMART BULB 10W",
    },
  ];

  const handleItemHover = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="bg-gradient-to-r from-green-500 to-black p-8 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-4">
          <div className="relative">
            <img 
              className={`rounded-lg object-cover ${selectedItem ? "blink" : ""}`}
              src={selectedItem.imgSrc} 
              alt={selectedItem.title}
              style={{
                width: '400px', 
                height: '300px',
                transition: 'opacity 0.3s ease-in-out',
              }}
            />
            <div className="absolute bottom-4 left-4 text-2xl font-bold bg-gradient-to-r from-green-500 to-black text-transparent bg-clip-text">
              {selectedItem.title} 
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-4">
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex items-start cursor-pointer"
                onMouseEnter={() => handleItemHover(item)} 
              >
                <span className="font-bold text-xl mr-4">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <p className="font-bold ">
                    {item.text} 
                  </p>
                  {index < 4 && <hr className="my-2 border-gray-300" />}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner5;