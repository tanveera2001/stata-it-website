import React from "react";
import pic1 from "../../assets/Image/pic1.png";
import img3 from "../../assets/Image/img3.jpg";
import pic3 from "../../assets/Image/pic3.png";
import pic4 from "../../assets/Image/pic4.png";
import pic5 from "../../assets/Image/pic5.png";
import img5 from "../../assets/Image/img5.jpg";

const AnimatedCard = () => {
  const items = [
    { id: 1, src: pic1, alt: "Feature 1" },
    { id: 2, src: img3, alt: "Feature 2" },
    { id: 3, src: pic3, alt: "Feature 3" },
    { id: 4, src: pic4, alt: "Feature 4" },
    { id: 5, src: pic5, alt: "Feature 5" },
    { id: 6, src: img5, alt: "Feature 6" },
  ];

  return (
    <div className="bg-gradient-to-b from-green-700 to-black text-white py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
          Hotel Features
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative group rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              {/* RGB Animated Border */}
              <div className="absolute inset-0 bg-[conic-gradient(at_top,_red,_green,_blue)] rounded-lg p-[3px] animate-rgb">
                <div className="h-full w-full bg-black rounded-lg"></div>
              </div>

              {/* Card Content */}
              <img
                src={item.src}
                alt={item.alt}
                className="relative z-10 w-full h-64 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
