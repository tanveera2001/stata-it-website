import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import logo from '../../../assets/Image/logo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-green-800 text-gray-200 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Information */}
        <div>
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto mb-4"
          />
          <p className="text-gray-300">
            Transform your house into a cutting-edge smart home with our innovative solutions. 
            Explore a world of convenience, security, and energy efficiency at your fingertips. 
            Join us in embracing the future of home living today!
          </p>
        </div>

        {/* Get to Know Us and For Business */}
        <div className="flex justify-between space-x-8">
          <div>
            <h3 className="font-bold text-lg text-white">Get to Know Us</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-green-400">About Us</a></li>
              <li><a href="#" className="hover:text-green-400">Support</a></li>
              <li><a href="#" className="hover:text-green-400">Blog</a></li>
              <li><a href="#" className="hover:text-green-400">Responsibility</a></li>
              <li><a href="#" className="hover:text-green-400">Careers</a></li>
              <li><a href="#" className="hover:text-green-400">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg text-white">For Business</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-green-400">Content Partners</a></li>
              <li><a href="#" className="hover:text-green-400">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-green-400">Reseller</a></li>
              <li><a href="#" className="hover:text-green-400">Commercial</a></li>
              <li><a href="#" className="hover:text-green-400">Instage</a></li>
            </ul>
          </div>
        </div>

        {/* Join Our Family */}
        <div>
          <h3 className="font-bold text-lg text-white">Join Our STATA Family</h3>
          <p className="text-gray-300 mt-2">
            Contact us to learn more about our dealership opportunities.
          </p>
          <a href="mailto:dealership@statait.com" className="text-green-400 hover:underline">
            dealership@statait.com
          </a>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-300 hover:text-green-400">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-green-400">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
