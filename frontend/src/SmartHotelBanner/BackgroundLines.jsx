import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge class names
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Colors array
const colors = [
  "#46A5CA",
  "#8C2F2F",
  "#4FAE4D",
  "#D6590C",
  "#811010",
  "#247AFB",
  "#A534A0",
  "#A8A438",
  "#D6590C",
  "#46A29C",
  "#670F6D",
  "#D7C200",
  "#59BBEB",
  "#504F1C",
  "#55BC54",
  "#4D3568",
  "#9F39A5",
  "#363636",
  "#860909",
  "#6A286F",
  "#604483",
];

// Generate random spots
const generateSpots = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    key: i,
    color: colors[Math.floor(Math.random() * colors.length)],
    size: Math.random() * 5 + 5, // Random size between 5px and 10px
    x: Math.random() * 1440, // Random X position
    y: Math.random() * 450, // Random Y position
    delay: Math.random() * 2, // Random animation delay
  }));
};

// Spots animation component
const AnimatedSpots = () => {
  const spots = generateSpots(50); // Number of spots

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 450"
      className="absolute top-0 left-0 w-full h-full"
    >
      {spots.map((spot) => (
        <motion.circle
          key={spot.key}
          cx={spot.x}
          cy={spot.y}
          r={spot.size}
          fill={spot.color}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: ["0%", `${Math.random() * 20 - 10}%`], // Small horizontal movement
            y: ["0%", `${Math.random() * 20 - 10}%`], // Small vertical movement
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: spot.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
};

// Gradient background wrapper
const AnimatedBackground = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative h-[20rem] md:h-screen w-full overflow-hidden",
        className
      )}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 opacity-50"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />
      <AnimatedSpots />
      {children}
    </div>
  );
};

// Main Demo Component
export function BackgroundLinesDemo() {
  return (
    <AnimatedBackground className="flex items-center justify-center flex-col px-4">
      <h2
        className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight"
      >
        Stata Smart Hotel Automation:  <br /> Embracing the Future of Hospitality
      </h2>
      <p
        className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center relative z-10"
      >
        Stata Smart Hotel Automation represents a prime example of advanced technological innovation and industry-redefining integration. The customer experience is revolutionized and hotel operations are simplified by Stata by utilizing cutting-edge automation technology
      </p>
    </AnimatedBackground>
  );
}
