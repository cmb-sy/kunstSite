"use client";
import React, { useEffect } from "react";

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
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
    <div className="text-black text-center font-bold text-4xl md:text-6xl lg:text-8xl xl:text-10xl leading-relaxed font-sans">
      {lines.map((line, lineIndex) => {
        const lineDelay = lineIndex * 1.5;
        return (
          <div key={lineIndex} className="animated-line">
            {line.split("").map((char, charIndex) => (
              <span
                key={charIndex}
                className="animated-text"
                style={{
                  animationDelay: `${1 + lineDelay + charIndex * 0.2}s`,
                }}
              >
                {char}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default AnimatedText;
