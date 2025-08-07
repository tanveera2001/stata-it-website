import React, { useState } from "react";
import pic1 from '../../../assets/Image/pic1.png'
import pic2 from '../../../assets/Image/pic2.png'
import pic3 from '../../../assets/Image/pic3.png'
import pic4 from '../../../assets/Image/pic4.png'
import pic5 from '../../../assets/Image/pic5.png'
import pic6 from '../../../assets/Image/pic6.png'
import pic7 from '../../../assets/Image/pic7.png'
import pic8 from '../../../assets/Image/pic8.png'
import pic9 from '../../../assets/Image/pic9.png'
import img5 from '../../../assets/Image/img5.jpg'
import img6 from '../../../assets/Image/img6.jpg'
import img7 from '../../../assets/Image/img7.jpg'

const Banner8 = () => {
  const [flipped, setFlipped] = useState(Array(12).fill(false));

  const cardsData = [
    { image: pic1, description: "Control More Than 1000+ STATA Smart Device From Any Place At Any Time Around The World Using The StataLife Mobile App." },
    { image: pic2, description: "Control More Than 1000+ STATA Smart Device From Any Place At Any Time Around The World Using The StataLife Mobile App." },
    { image: pic3, description: "Control More Than 1000+ STATA Smart Device From Any Place At Any Time Around The World Using The StataLife Mobile App." },
    { image: pic4, description: "Control More Than 1000+ STATA Smart Device From Any Place At Any Time Around The World Using The StataLife Mobile App." },
    { image:pic5, description: "Control More Than 1000+ STATA Smart Device From Any Place At Any Time Around The World Using The StataLife Mobile App." },
    { image: pic6, description: "Control More Than 1000+ STATA Smart Device From Any Place At Any Time Around The World Using The StataLife Mobile App." },
    { image:pic7, description: "Control More Than 1000+ STATA Smart Device From Any Place At Any Time Around The World Using The StataLife Mobile App." },
    { image: pic8, description: "Control More Than 1000+ STATA Smart Device From Any Place At Any Time Around The World Using The StataLife Mobile App." },
    { image: pic9, description: "Control More Than 1000+ STATA Smart Device From Any Place At Any Time Around The World Using The StataLife Mobile App." },
    { image: img5, description: "Control More Than 1000+ STATA Smart Device From Any Place At Any Time Around The World Using The StataLife Mobile App." },
    { image: img6, description: "Control More Than 1000+ STATA Smart Device From Any Place At Any Time Around The World Using The StataLife Mobile App." },
    { image: img7, description: "Control More Than 1000+ STATA Smart Device From Any Place At Any Time Around The World Using The StataLife Mobile App." },
  ];

  const handleMouseEnter = (index) => {
    setFlipped((prevFlipped) => {
      const newFlipped = [...prevFlipped];
      newFlipped[index] = true;
      return newFlipped;
    });
  };

  const handleMouseLeave = (index) => {
    setFlipped((prevFlipped) => {
      const newFlipped = [...prevFlipped];
      newFlipped[index] = false;
      return newFlipped;
    });
  };

  return (
    <div
      className="grid grid-cols-4 gap-4 p-4"
      style={{ perspective: "1000px" }}
    >
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="w-72 h-48"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <div
            className={`relative w-full h-full transition-transform duration-1000 ${
              flipped[index] ? "rotate-y-180" : ""
            }`}
            style={{
              transformStyle: "preserve-3d",
              transform: flipped[index] ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* Front Side */}
            <div
              className="absolute w-full h-full flex items-center justify-center text-white text-2xl font-bold"
              style={{
                border: "10px solid ",
                borderRadius: "10px",
                backfaceVisibility: "hidden",
                overflow: "hidden",
              }}
            >
              <img
                src={card.image}
                alt={`Card ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Back Side */}
            <div
              className="absolute w-full h-full flex items-center justify-center text-white text-sm p-4 text-center"
              style={{
                backgroundColor: "#000000",
               
                borderRadius: "10px",
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
              }}
            >
              {card.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner8;
