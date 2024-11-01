"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const ScrollButton: React.FC = () => {
  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById("about-me");
    if (aboutMeSection) {
      const yOffset = -50; // 遷移後の調整値
      const y = aboutMeSection.getBoundingClientRect().top + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 lg:mt-10">
      <button
        onClick={scrollToAboutMe}
        className="bounce-button bg-gray-500 rounded-full w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center"
      >
        <FontAwesomeIcon
          icon={faArrowDown}
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
          color="white"
        />
      </button>
    </div>
  );
};

export default ScrollButton;
