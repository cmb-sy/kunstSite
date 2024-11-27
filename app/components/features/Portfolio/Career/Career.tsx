"use client";

import React, { useState, useRef, useEffect } from "react";
import { CareerData, YearData } from "./CareerData";
import { FaChevronDown } from "react-icons/fa";

interface AccordionTableProps {
  title: string;
  children: React.ReactNode;
  onToggle: (isOpen: boolean, height: number) => void;
}

function AccordionTable({ title, children, onToggle }: AccordionTableProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  const handleToggle = () => {
    setIsOpen(!isOpen);
    onToggle(!isOpen, contentRef.current!.scrollHeight);
  };

  useEffect(() => {
    setMaxHeight(isOpen ? `${contentRef.current!.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div
      className="w-full max-w-3xl px-4 my-4 border border-gray-400 p-4 cursor-pointer hover:cursor-pointer"
      onClick={handleToggle}
    >
      <h3 className="text-center text-black dark:text-darkModeFontColor py-2 flex justify-between items-center">
        {title}
        <FaChevronDown
          width={24}
          height={24}
          className={`transition-transform duration-500 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </h3>
      <div
        ref={contentRef}
        className="mt-2 transition-max-height duration-500 ease-in-out"
        style={{
          maxHeight,
          overflow: "hidden",
          transition: "max-height 0.3s ease-in-out",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Career() {
  const [totalHeight, setTotalHeight] = useState(0);

  const handleToggle = (isOpen: boolean, height: number) => {
    setTotalHeight((prev) => (isOpen ? prev + height : prev - height));
  };

  return (
    <div
      className="flex flex-col items-center"
      style={{
        height: `calc(400px + ${totalHeight}px)`,
        overflowY: "hidden",
        transition: "height 0.3s ease-in-out",
      }}
    >
      <div className="w-full max-w-3xl p-4 sm:px-10 md:px-12 lg:px-16">
        {CareerData && CareerData.length > 0 ? (
          CareerData.map((yearData: YearData, yearIndex: number) => (
            <AccordionTable
              key={yearIndex}
              title={yearData.年度}
              onToggle={handleToggle}
            >
              {yearData.キャリア.map(
                (
                  project: {
                    プロジェクト: string;
                    開発環境: string;
                    業務内容: string;
                  },
                  projectIndex: number
                ) => (
                  <table
                    key={projectIndex}
                    className="table-auto w-full border-collapse border border-gray-400 mx-auto mb-4"
                  >
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 bg-gray-200 text-gray-800 font-bold w-1/4">
                          プロジェクト名
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {project.プロジェクト}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 bg-gray-200 text-gray-800 font-bold w-1/4">
                          開発環境
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {project.開発環境}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 bg-gray-200 text-gray-800 font-bold w-1/4">
                          業務内容
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {project.業務内容}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                )
              )}
            </AccordionTable>
          ))
        ) : (
          <p>データがありません。</p>
        )}
      </div>
    </div>
  );
}

export default Career;
