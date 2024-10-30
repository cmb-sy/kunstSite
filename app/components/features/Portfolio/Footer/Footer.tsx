"use client";

import React from "react";

const Footer: React.FC = () => {
  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById("top-page");
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-black w-full z-10 relative flex flex-col items-center">
      <div className="bg-gray-600 w-full py-16 md:py-32 flex justify-center relative">
        <div className="sm:text-3xl md:text-5xl text-white">
          Thank You for visiting
        </div>
        <button
          className="absolute bottom-0 transform translate-y-2/3 bg-gray-800 text-white rounded-full w-24 h-24 md:w-36 md:h-36 flex items-center justify-center hover:translate-y-1/2 transition-transform duration-300"
          onClick={scrollToAboutMe}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 48 48"
            className="w-16 h-16 md:w-24 md:h-24 text-white"
            style={{ transform: "rotate(180deg)" }}
          >
            <path
              d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
      <div className="bg-gray-800 w-full flex flex-col items-center pt-6 md:pt-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4">
          <div className="text-xs md:text-sm text-white self-start md:self-auto ml-5">
            &copy; All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
