"use client";

import Image from "next/image";
import { ProgrammingSkills, skillTable } from "./SkillData";
import dynamic from "next/dynamic";

const RadarChart = dynamic(() => import("./RadarChart"), { ssr: false });

const Skills: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-5xl">
        <div className="flex justify-center">
          <RadarChart />
        </div>
        {ProgrammingSkills.map((skillCategory: skillTable, index: number) => (
          <div key={index} className="p-6 transition duration-300 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center">
              {skillCategory.skillType}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategory.skill.map((skill, idx) => (
                <div key={idx} className="flex items-start mb-4">
                  {skill.imagePass && (
                    <div className="flex-shrink-0 mr-4">
                      <Image
                        src={skill.imagePass}
                        alt={skill.name}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                  )}
                  <div className="flex flex-col">
                    <div className="font-bold">{skill.name}</div>
                    <div>{skill.level}</div>
                    <div className="text-md h-30 overflow-hidden">
                      {skill.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
