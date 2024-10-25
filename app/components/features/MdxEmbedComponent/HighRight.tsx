import React from "react";

interface HighlightProps {
  children: React.ReactNode;
}

const Highlight: React.FC<HighlightProps> = ({ children }) => {
  return <div className="bg-yellow-300">{children}</div>;
};

export default Highlight;
