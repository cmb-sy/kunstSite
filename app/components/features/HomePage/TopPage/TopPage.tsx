import React from "react";
import AnimatedText from "./animationTitle";

const TopPage: React.FC = () => {
  const title = "kunst Site";

  return (
    <>
      <AnimatedText text={title} />
    </>
  );
};

export default TopPage;
