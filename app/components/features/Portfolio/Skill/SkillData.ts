import { StaticImageData } from "next/image";

import React from "/public/portfolio/TechLogo/frontend/React.png";
import Vue from "/public/portfolio/TechLogo/frontend/Vue.png";
import Typescript from "/public/portfolio/TechLogo/frontend/Typescript.png";
import JavaScript from "/public/portfolio/TechLogo/frontend/Javascript.png";
import Astro from "/public/portfolio/TechLogo/frontend/Astro.png";
import HTML from "/public/portfolio/TechLogo/frontend/HTML.png";
import CSS from "/public/portfolio/TechLogo/frontend/CSS.png";

import Django from "/public/portfolio/TechLogo/backend/Django.png";
import Flask from "/public/portfolio/TechLogo/backend/Flask.png";

import Python from "/public/portfolio/TechLogo/dataScience/Python.png";
import R from "/public/portfolio/TechLogo/dataScience/R.png";

import AWS from "/public/portfolio/TechLogo/infra/AWS.png";
import Postgresql from "/public/portfolio/TechLogo/infra/Postgresql.png";

import Linux from "/public/portfolio/TechLogo/other/linux.svg";

import IPA from "/public/portfolio/TechLogo/certificate/IPA_logo.png";
import TOEIC from "/public/portfolio/TechLogo/certificate/logo-toeic.svg";
import JSSC from "/public/portfolio/TechLogo/certificate/JSSC.png";
import DL from "/public/portfolio/TechLogo/certificate/DeepLearning.png";
import Bookkeeping from "/public/portfolio/TechLogo/certificate/Bookkeeping.png";

export type skillDetail = {
  name: string;
  imagePass?: StaticImageData;
  level: string;
  description: string;
};

export type skillTable = {
  skillType: string;
  skill: skillDetail[];
};

export const ProgrammingSkills: skillTable[] = [
  {
    skillType: "フロントエンド",
    skill: [
      {
        name: "JavaScript",
        imagePass: JavaScript,
        level: "★★★☆☆",
        description:
          "システム開発として使用経験があります。また、プライベートでもJSを使って開発した経験があります。",
      },
      {
        name: "Typescript",
        imagePass: Typescript,
        level: "★★★☆☆",
        description:
          "システム開発として使用経験があります。また、プライベートでもTypeScriptを使って開発した経験があります。",
      },
      {
        name: "Vue",
        imagePass: Vue,
        level: "★★★★☆",
        description:
          "システム開発として使用経験があります。また、プライベートでもTypeScriptを使って開発した経験があります。",
      },
      {
        name: "React",
        imagePass: React,
        level: "★★★☆☆",
        description:
          "プライベートのアプリケーション開発として使用経験があります。",
      },
      {
        name: "Astro",
        imagePass: Astro,
        level: "★★☆☆☆",
        description: "プライベートなブログ運用で使用経験があります。",
      },
      {
        name: "HTML",
        imagePass: HTML,
        level: "★★★☆☆",
        description:
          "システム開発として使用経験があります。また、プライベートのアプリケーション開発でも使用経験があります。",
      },
      {
        name: "CSS",
        imagePass: CSS,
        level: "★★★☆☆",
        description:
          "システム開発として使用経験があります。また、プライベートのアプリケーション開発でも使用経験があります。",
      },
    ],
  },
  {
    skillType: "バックエンド",
    skill: [
      {
        name: "Django",
        imagePass: Django,
        level: "★★☆☆☆",
        description:
          "プライベートなアプリケーション開発として使用した経験があります。",
      },
      {
        name: "Flask",
        imagePass: Flask,
        level: "★★☆☆☆",
        description:
          "プライベートなアプリケーション開発や、ハッカソンでの採用技術として使用した経験があります。",
      },
    ],
  },
  {
    skillType: "データサイエンス",
    skill: [
      {
        name: "python",
        imagePass: Python,
        level: "★★★★☆",
        description:
          "業務とプライベートの両方でデータ分析や機械学習モデル構築をしてきました。また、データ分析やグラフ描画、モデル構築のため様々なフレームワークを用いた経験があります。",
      },
      {
        name: "R",
        imagePass: R,
        level: "★★★☆☆",
        description: "業務としてR言語を用いてデータ分析を行いました。",
      },
    ],
  },
  {
    skillType: "インフラ",
    skill: [
      {
        name: "AWS",
        imagePass: AWS,
        level: "★★★☆☆",
        description: "サービスの運用・保守として業務経験があります。",
      },
      {
        name: "Postgresql",
        imagePass: Postgresql,
        level: "★★★☆☆",
        description:
          "データ分析のデータ匿名化、サービスの運用・保守として用いた経験があります。",
      },
    ],
  },
  {
    skillType: "その他",
    skill: [
      {
        name: "Linux",
        imagePass: Linux,
        level: "★★★☆☆",
        description: "業務とプライベートの両方で経験があります。",
      },
    ],
  },
  {
    skillType: "保有資格",
    skill: [
      {
        name: "IPA:FE/AP/SC/DB",
        imagePass: IPA,
        level: "",
        description: "IT知識全般を身につけるため取得しました。",
      },
      {
        name: "TOEIC:810",
        imagePass: TOEIC,
        level: "",
        description: "最低限の英語力を身につけるため取得しました。",
      },
      {
        name: "統計検定:準1級/2級",
        imagePass: JSSC,
        level: "",
        description:
          "機械学習のアルゴリズムを数学的に理解するため取得しました。",
      },
      {
        name: "E資格",
        imagePass: DL,
        level: "",
        description: "機械学習の知識を得るために取得しました。",
      },
      {
        name: "簿記検定:2級",
        imagePass: Bookkeeping,
        level: "",
        description: "会計知識を得るために取得しました。",
      },
    ],
  },
];
