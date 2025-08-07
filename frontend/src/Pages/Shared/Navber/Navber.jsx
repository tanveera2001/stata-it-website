import React, { useState } from "react";
import logo from "../../../assets/Image/logo.jpeg";
import { navdata } from "../../../Utils/navlink";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  return (
    <nav className="bg-gradient-to-r from-black to-green-700 shadow-md py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <span className="text-white font-bold text-xl">STATA</span>
        </div>

        {/* Navbar Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          {navdata.map((item) => (
         item.route?   <Link
         to={item.path}
         key={item.title}
         className="text-gray-200 hover:text-green-300"
       >
         {item.title}
       </Link>: <a href={item.path}>{item.title}</a>
          ))}
        </div>

        {/* Call to Action Button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="#"
            className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600"
          >
            CREATE OWN DESIGN
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu
            className="text-gray-200 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-black to-green-700">
          <div className="flex flex-col space-y-2 px-4 py-2">
            {navdata.map((item) => (
              <Link
                to={item.path}
                key={item.title}
                className="text-gray-200 hover:text-green-300"
              >
                {item.title}
              </Link>
            ))}
            {/* Call to Action Button for Mobile */}
            <a
              href="#"
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 text-center"
            >
              CREATE OWN DESIGN
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
