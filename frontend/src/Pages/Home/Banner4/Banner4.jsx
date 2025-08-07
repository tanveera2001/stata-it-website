import React from 'react';
import { useTime, useTransform, motion } from 'framer-motion';
import img2 from '../../../assets/Image/img2.png';

const Banner4 = () => {
   
    const time = useTime();
    const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

    return (
        <div className="relative h-[700px] flex items-center justify-center  text-white" style={{ background: 'linear-gradient(to right, #000000, #004d00)' }}>
            <div className="flex items-center space-x-10">
                
               
                <div className="relative flex justify-center items-center bg-white rounded-full p-12">
                    <motion.img
                        src={img2}
                        alt="Smart Switch"
                        className="h-64 w-64 rounded-lg"
                        style={{ rotate }}
                    />

                    
                    <div className="absolute top-1/4 left-1/4 flex items-center space-x-2 group">
                        <div className="w-4 h-4 bg-green-500 rounded-full relative cursor-pointer transform transition-transform duration-300 hover:scale-110">
                            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-green-500 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Crystal Tempered Glass Panel!
                            </span>
                        </div>
                    </div>
                    <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-green-500 rounded-full group cursor-pointer transform transition-transform duration-300 hover:scale-110">
                        <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-green-500 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Voice Control Enabled
                        </span>
                    </div>
                    <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-green-500 rounded-full group cursor-pointer transform transition-transform duration-300 hover:scale-110">
                        <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-green-500 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Remote Access
                        </span>
                    </div>
                </div>

                <div className="text-left space-y-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-green-400">SMART SWITCH SERIES</h1>
                    <p className="text-green-200 text-lg max-w-lg">
                        Get personalized help with your preset schedule, make suitable routines, control the switch from any place around the world & trigger using voice command.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner4;
