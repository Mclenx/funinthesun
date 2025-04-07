"use client";
import React, { useState } from 'react';
import { Hero } from '../pages/Hero'; // Importing Hero component as named import
import Contact from '../pages/Contact'; 
import { NavBar } from '../pages/navBar';
import { Services } from '../pages/Services'; // Updated to named import
import LanguageSlider from '../pages/LanguageSlider';


const Page = () => {
    const [isContactVisible, setContactVisible] = useState(false);

    const handleContactClick = () => {
        setContactVisible(true);
    };

    const handleCloseContact = () => {
        setContactVisible(false);
    };

    return ( 
        <div>
            <Hero /> 
            <NavBar onContactClick={handleContactClick} />
            <Contact isVisible={isContactVisible} onClose={handleCloseContact} />
            <LanguageSlider />
            <Services />
        </div>
    );
};

export default Page;
