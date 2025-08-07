import React from 'react';
import { motion } from 'framer-motion';
import img2 from '../../../assets/Image/img2.png';

const Banner3 = () => {
    return (
        <div
            className="relative bg-cover bg-center h-[700px] flex flex-col items-center justify-center text-center overflow-hidden"
            style={{
                backgroundImage: `url(${img2})`,
            }}
        >
           
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${img2})` }}
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
            />

          
            <div className="absolute inset-0 bg-black opacity-30"></div>

           
            <div className="relative z-10 text-gray-800 px-6">
               
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-green-500"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    whileHover={{ scale: 1.1, transition: { yoyo: Infinity, duration: 0.5 } }}
                >
                    Welcome To The World of STATA LIFESTYLE
                </motion.h1>

                
                <motion.p
                    className="mt-4 text-sky-500 text-lg max-w-2xl mx-auto overflow-hidden whitespace-nowrap border-r-2 border-sky-500"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                >
                    Experience the epitome of style with STATA LIFESTYLE – your gateway to a refined lifestyle
                </motion.p>

                
                <div className="mt-8 space-y-4">
                    <motion.button
                        className="bg-white text-gray-700 text-lg px-6 py-2 rounded-full shadow-lg transition duration-200 hover:bg-gray-200"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Alexa, Open my garage door
                    </motion.button>
                    <motion.button
                        className="bg-blue-500 text-white text-lg px-6 py-2 rounded-full shadow-lg transition duration-200 hover:bg-blue-600"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Alexa, Turn off lights
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default Banner3;
