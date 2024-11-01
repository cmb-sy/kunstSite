import React from "react";
import ParticleBackground from "./ParticlesBackground";
import AnimatedText from "./animationTitle";
import TopPageScroolButton from "./TopPageScroolButton";

const TopPage: React.FC = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        {/* 背景としてParticlesコンポーネントを配置 */}
        <div className="absolute inset-0 z-0">
          <ParticleBackground />
        </div>
        {/* コンテンツをオーバーレイとして配置 */}
        <div className="relative z-10 flex flex-col w-full h-full px-4 py-10 md:px-10 md:py-20 mt-10">
          <div className="text-center text-black text-4xl md:text-6xl lg:text-8xl font-bold leading-relaxed px-4 md:px-10">
            <AnimatedText text="kunst Site" />
            <span className="text-lg md:text-1xl lg:text-2xl">
              プロフェッショナルを目指し、発信力と文章力を磨き続け、学びと経験を形にする
            </span>
            <TopPageScroolButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopPage;
