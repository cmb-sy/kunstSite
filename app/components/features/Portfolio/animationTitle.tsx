"use client";
import React, { useEffect } from "react";

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById("about-me");
    if (aboutMeSection) {
      const yOffset = -50; // 遷移後の調整値
      const y = aboutMeSection.getBoundingClientRect().top + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .animated-text {
        display: inline;
        opacity: 0;
        animation: fadeIn 0.5s forwards;
      }

      @keyframes fadeIn {
        to {
          opacity: 1;
        }
      }

      .animated-line {
        white-space: pre-wrap; /* 改行を有効にする */
      }

      .bounce-button {
        animation: bounce 2s infinite;
      }

      @keyframes bounce {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const lines = text.split("\n");

  return (
    <div className="text-black text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl leading-relaxed font-sans">
      {lines.map((line, lineIndex) => {
        const lineDelay = lineIndex * 1.5;
        return (
          <div key={lineIndex} className="animated-line">
            {line.split("").map((char, charIndex) => (
              <span
                key={charIndex}
                className="animated-text"
                style={{ animationDelay: `${lineDelay + charIndex * 0.2}s` }}
              >
                {char}
              </span>
            ))}
          </div>
        );
      })}
      <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 lg:mt-10">
        <button
          onClick={scrollToAboutMe}
          className="bounce-button bg-gray-800 rounded-full p-2 sm:p-3 md:p-4 lg:p-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 48 48"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
          >
            <path
              d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"
              fill="white"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AnimatedText;
