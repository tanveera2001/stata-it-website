import React from 'react';
import { FaLock, FaRocket, FaMicrochip, FaCalendarAlt } from 'react-icons/fa';
import { AiOutlineMobile } from 'react-icons/ai';
import { BsClockHistory } from 'react-icons/bs';
import img9 from '../../../assets/Image/img9.jpg';

const Banner6 = () => {
  return (
    <div id='features' className="p-4 md:p-8 text-gray-700" style={{ background: "linear-gradient(to right, black, green)" }}>
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-2">Smart Switch Features</h2>
        <p className="text-sm md:text-lg lg:text-lg text-gray-200 leading-relaxed">
          Smart switches are a great way to add convenience and security to your home. With a smart switch, you can control your lights and appliances from anywhere, using your smartphone or voice assistant. You can also create schedules and automations to make your life easier.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-12 max-w-5xl mx-auto">

        {/* Left Features Section */}
        <div className="flex flex-col space-y-6 md:w-1/2 lg:w-1/3">
          <div className="text-center">
            <FaRocket className="text-2xl md:text-3xl text-white mx-auto mb-2" />
            <h3 className="text-lg md:text-xl font-semibold text-white">Remote Access</h3>
            <p className="text-sm md:text-gray-200">Control your STATA switch from any place around the world!</p>
          </div>

          <div className="text-center">
            <FaLock className="text-2xl md:text-3xl text-white mx-auto mb-2" />
            <h3 className="text-lg md:text-xl font-semibold text-white">Touch Control</h3>
            <p className="text-sm md:text-gray-200">Experience modern elegance and effortless functionality with our Touch Control switch technology.</p>
          </div>

          <div className="text-center">
            <FaMicrochip className="text-2xl md:text-3xl text-white mx-auto mb-2" />
            <h3 className="text-lg md:text-xl font-semibold text-white">Voice Control</h3>
            <p className="text-sm md:text-gray-200">All our switches are compatible with Google Home and Amazon Alexa Voice Assistant.</p>
          </div>
        </div>

        {/* Center Image Section */}
        <div className="w-full md:w-1/2 lg:w-1/2 p-2 flex justify-center">
          <img
            src={img9}
            alt="Smart Switch"
            className="max-w-sm md:max-w-lg h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Features Section */}
        <div className="flex flex-col space-y-6 md:w-1/2 lg:w-1/3">
          <div className="text-center">
            <AiOutlineMobile className="text-2xl md:text-3xl text-white mx-auto mb-2" />
            <h3 className="text-lg md:text-xl font-semibold text-white">StataLife App Control</h3>
            <p className="text-sm md:text-gray-200">Transform your living space into a hub of convenience and innovation with StataLife smarthome App Control.</p>
          </div>

          <div className="text-center">
            <BsClockHistory className="text-2xl md:text-3xl text-white mx-auto mb-2" />
            <h3 className="text-lg md:text-xl font-semibold text-white">Set Timer</h3>
            <p className="text-sm md:text-gray-200">Set a timer on your switch to automate your lights and save energy.</p>
          </div>

          <div className="text-center">
            <FaCalendarAlt className="text-2xl md:text-3xl text-white mx-auto mb-2" />
            <h3 className="text-lg md:text-xl font-semibold text-white">Set Schedule & Routine</h3>
            <p className="text-sm md:text-gray-200">Easily schedule device usage by setting a timer on your switch for added convenience.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner6;
