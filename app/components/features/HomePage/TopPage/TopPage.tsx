import React from "react";
import ParticleBackground from "./ParticlesBackground";
import AnimatedText from "./animationTitle";

const TopPage: React.FC = () => {
  return (
    <>
      <div className="relative">
        {/* 背景としてParticlesコンポーネントを配置 */}
        <div className="absolute inset-0 z-0">
          <ParticleBackground />
        </div>
        {/* コンテンツをオーバーレイとして配置 */}
        <div className="relative z-10 flex flex-col px-4 py-10 md:px-10 md:py-20 my-10 text-center">
          <AnimatedText text="kunst Site" />
          <span className="text-sm md:text-2xl m-10">
            プロフェッショナルを目指し、発信力と文章力を磨き、学びと経験を形にする
          </span>
        </div>
      </div>
    </>
  );
};

export default TopPage;
