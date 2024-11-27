import React, { useState, useEffect } from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
import { Background } from "@tsparticles/engine";
import { colorBrewer } from "react-syntax-highlighter/dist/esm/styles/hljs";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart: React.FC = () => {
  const [chartSize, setChartSize] = useState({ width: 400, height: 400 });
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth * 0.8;
      const height = window.innerHeight * 0.8;
      setChartSize({
        width: width > 400 ? 400 : width,
        height: height > 400 ? 400 : height,
      });
    };

    const handleDarkModeChange = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const observer = new MutationObserver(handleDarkModeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  const skillLevels = [
    { name: "フロントエンド" },
    { name: "バックエンド" },
    { name: "インフラ" },
    { name: "データサイエンス" },
    { name: "その他" },
  ];

  const data = {
    labels: skillLevels.map((skill) => skill.name),
    datasets: [
      {
        data: [4, 3, 3, 5, 3],
        backgroundColor: "rgba(158, 158, 158, 0.2)", // 多角形内の色
        borderColor: isDarkMode ? "#c9d1d9" : "#808080", // 多角形の線
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      r: {
        min: 0,
        max: 5,
        ticks: {
          stepSize: 1,
          backdropColor: "rgba(0, 0, 0, 0)",
          color: isDarkMode ? "#e0e0e0" : "#828282",
          z: 1, // 表示の位置を変更
        },
        angleLines: {
          display: true,
          color: isDarkMode ? "#757575" : "#c9d1d9",
        },
        grid: {
          circular: true,
          color: isDarkMode ? "#757575" : "#c9d1d9",
        },
        pointLabels: {
          font: {
            size: 14,
          },
          color: isDarkMode ? "#c9d1d9" : "#828282",
        },
      },
    },
    plugins: {
      // 文字が表示しないように
      legend: {
        display: false,
      },
    },
  };

  return (
    <div
      className="dark:text-white"
      style={{
        width: `${chartSize.width}px`,
        height: `${chartSize.height}px`,
        maxWidth: "100%",
        maxHeight: "100%",
      }}
    >
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
