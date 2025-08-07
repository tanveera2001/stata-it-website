import React, { useState } from "react";

export const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={`rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out ${
      hovered !== null && hovered !== index ? "blur-sm scale-[0.98]" : ""
    }`}>
    <img
      src={card.src}
      alt={card.title}
      className="object-cover absolute inset-0 w-full h-full" />
    <div
      className={`absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300 ${
        hovered === index ? "opacity-100" : "opacity-0"
      }`}>
      <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
        {card.title}
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-full bg-gradient-to-r from-black via-blue-500 to-green-500 opacity-80"> {/* Overall background color added here */}
      <h1 className="text-3xl text-center mb-6 font-bold text-green-500">Hotel Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
        {cards.map((card, index) => (
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
    </div>
  );
}
