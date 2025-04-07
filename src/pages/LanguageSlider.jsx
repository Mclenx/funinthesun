"use client";
import React from "react"; // Importing React

import "./LanguageSlider.css"; // Importing CSS for styling

const LanguageSlider = () => {
  const languages = [
    { id: 1, name: "JavaScript", logo: "/LanguageSlider/javascript_logo.png" },
    { id: 2, name: "HTML", logo: "/LanguageSlider/html5-emblem-orange-shield-and-white-text-vector.png" },
    { id: 3, name: "CSS", logo: "/LanguageSlider/css-logo.png" },
    { id: 4, name: "TailwindCSS", logo: "/LanguageSlider/tailwindcss-icon.png" },
    { id: 5, name: "PostgreSQL", logo: "/LanguageSlider/postgresql.png" },
    { id: 6, name: "Bootstrap", logo: "/LanguageSlider/bootstrap.png" },
    { id: 7, name: "TypeScript", logo: "/LanguageSlider/typescript-original.png" },
    { id: 8, name: "React", logo: "/LanguageSlider/react-original-wordmark.png" },
    { id: 9, name: "Next.js", logo: "/LanguageSlider/nextjs-original.png" },
    { id: 10, name: "JSON", logo: "/LanguageSlider/json.png" },
    { id: 11, name: "Redux", logo: "/LanguageSlider/redux.png" },
    { id: 12, name: "NodeJs", logo: "/LanguageSlider/node-js-logo.png" },
  ];

  return ( 
    <div className="banner">
      <div className="slider" style={{"--quantity": 12}}>
          {languages.map((language, index) => (
            <div className="item" style={{"--position": index + 1}} key={language.id}>
              <img src={language.logo} alt={language.name}/>
            </div>
          ))}
      </div>
    </div> 
  );
};

export default LanguageSlider;
