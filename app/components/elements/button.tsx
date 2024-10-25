import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
}
// ピカーンボタン
const Button: React.FC<ButtonProps> = ({ text, className }) => {
  return (
    <button
      className={`group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 transition hover:scale-110 ${className}`}
    >
      <span>{text}</span>
      <div className="absolute inset-0 flex h-full w-full justify-center transform -skew-x-12 -translate-x-full group-hover:duration-1000 group-hover:transform group-hover:skew-x-12 group-hover:translate-x-full">
        <div className="relative h-full w-8 bg-white/20"></div>
      </div>
    </button>
  );
};

export default Button;
