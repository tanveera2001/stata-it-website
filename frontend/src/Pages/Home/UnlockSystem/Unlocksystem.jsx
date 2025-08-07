import React, { useState } from "react";

const Unlocksystem = () => {
  // State to track the selected option
  const [selectedOption, setSelectedOption] = useState(null);

  // Image mapping based on options
  const images = {
    "Fingerprint Unlock": "../../../../src/assets/Image/biometric-door-locks.jpg", 
    "RFID Card Unlock": "../../../../src/assets/Image/images/set-up/pic1.jpg",
    "Password Unlock": "../../../../src/assets/Image/images/set-up/pic3.jpg",
    "Generate Guest OTP": "/images/otp.jpg",
    "App to Unlock": "/images/app.jpg",
  };

  return (
    <div className="bg-gradient-to-r from-black to-green-700  min-h-screen flex flex-col items-center py-10">
      {/* Top Unlock Options */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4 md:px-10">
        {[
          { label: "Fingerprint Unlock", icon: "🎵" },
          { label: "RFID Card Unlock", icon: "📇" },
          { label: "Password Unlock", icon: "🔑" },
          { label: "Generate Guest OTP", icon: "📢" },
          { label: "App to Unlock", icon: "📱" },
        ].map((option, index) => (
          <div
            key={index}
            onClick={() => setSelectedOption(option.label)} // Set selected option on click
            className={`cursor-pointer flex flex-col items-center justify-center border-2 p-4 rounded-lg ${
              selectedOption === option.label
                ? "bg-green-500 text-white"
                : "bg-black"
            }`}
          >
            <div className="text-3xl">{option.icon}</div>
            <div className="mt-2 text-center text-sm font-medium">
              {option.label}
            </div>
          </div>
        ))}
      </div>

      {/* Generate OTP Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Use StataLife App to Generate OTP
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="text"
            placeholder="Generate Guest OTP"
            className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
            Send it Remotely to your guest to unlock
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-10">
        {selectedOption && (
          <img
            src={images[selectedOption]} 
            alt={selectedOption}
            className="rounded-lg shadow-md "
          />
        )}
      </div>
    </div>
  );
};

export default Unlocksystem;
