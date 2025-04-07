"use client"; // Add this directive to mark the component as a client component

import React, { useEffect } from "react";
import Typed from "typed.js"; // Importing Typed.js
import ExperienceText from "./ExperienceText"; // Re-importing the component

export const Hero = () => {
  useEffect(() => {
    const options = {
      strings: ['Website', 'Mobile App', 'User Interface', 'User Experience', 'SEO Improvements', 'Digital Footprint'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };

    const typed = new Typed('.typing', options); // Instantiate Typed.js

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="relative h-screen text-white overflow-hidden z-0">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black opacity-0"></div>
      </div>
      
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to <span className="text-green-600 text-7xl">EEB Web Dev</span></h1>
        <p className="text-2xl text-gray-300 mb-8 pt-2">Let's build your <span className="typing text-3xl libre-baskerville-bold text-green-600"></span></p>
        
        <div className="mt-9">
          <ExperienceText />
        </div>
      </div>
    </div>
  );
};
