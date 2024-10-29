import { StaticImageData } from "next/image";

import nyanko from "/public/portfolio/Works/nyankoGenerator.png";
import Omikuzi from "/public/portfolio/Works/omikuzi.png";
import taskManage from "/public/portfolio/Works/taskManage.png";

export interface Work {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string | StaticImageData;
  sourceUrl: string;
}

export const works: Work[] = [
  {
    id: 1,
    title: "カンバン式タスク管理ツール",
    description:
      "カンバン方式でタスクを管理するアプリケーション。仕事用に欲しく開発してみました。",
    tags: ["python", "Django"],
    imageUrl: taskManage,
    sourceUrl: "https://github.com/cmb-sy/Manage-Tasks-with-Kanban-board",
  },
  {
    id: 2,
    title: "にゃんこGenerator",
    description:
      "REACT学習を目的として猫画像を眺めるアプリケーションを開発しました",
    tags: ["Typescript", "REACT"],
    imageUrl: nyanko,
    sourceUrl: "https://github.com/cmb-sy/nyanko-generator",
  },
  {
    id: 3,
    title: "媚みくじ",
    description:
      "ハッカソンで開発した、おみくじに遊び要素を組み入れたアプリケーション",
    tags: ["Python", "Flask"],
    imageUrl: Omikuzi,
    sourceUrl: "https://github.com/cmb-sy/Omikuji",
  },
];
