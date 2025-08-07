import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function Compare({
  firstImage,
  secondImage,
  firstImageClassName = "",
  secondImageClassname = "",
  className = "",
  slideMode = "hover",
  autoplay = false,
  autoplaySpeed = 2000, // Autoplay duration in milliseconds
}) {
  const [sliderPosition, setSliderPosition] = useState(50); // Default slider position (50%)

  // Handle hover-based slider position
  const handleMouseMove = (e) => {
    if (slideMode === "hover") {
      const rect = e.currentTarget.getBoundingClientRect();
      const position = ((e.clientX - rect.left) / rect.width) * 100;
      setSliderPosition(position);
    }
  };

  // Handle drag slider change
  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  // Autoplay logic
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setSliderPosition((prev) => (prev >= 100 ? 0 : prev + 1)); // Increment slider position
    }, autoplaySpeed / 100); // Divide speed by 100 to achieve smooth sliding

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [autoplay, autoplaySpeed]);

  return (
    <div
      className={`relative overflow-hidden w-full h-full ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* First Image */}
      <img
        src={firstImage}
        alt="First comparison"
        className={`absolute top-0 left-0 w-full h-full ${firstImageClassName}`}
      />
      {/* Second Image */}
      <img
        src={secondImage}
        alt="Second comparison"
        className={`absolute top-0 left-0 w-full h-full ${secondImageClassname}`}
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0% 100%)`,
        }}
      />
      {/* Slider for Drag Mode */}
      {slideMode === "drag" && (
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="absolute bottom-0 left-0 w-full h-2 bg-gray-300 appearance-none rounded-lg cursor-pointer"
        />
      )}
    </div>
  );
}

Compare.propTypes = {
  firstImage: PropTypes.string.isRequired,
  secondImage: PropTypes.string.isRequired,
  firstImageClassName: PropTypes.string,
  secondImageClassname: PropTypes.string,
  className: PropTypes.string,
  slideMode: PropTypes.oneOf(["hover", "drag"]),
  autoplay: PropTypes.bool,
  autoplaySpeed: PropTypes.number, // Duration for autoplay in milliseconds
};
