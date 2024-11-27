import { AiOutlineEdit } from "react-icons/ai";
import { DiAtom } from "react-icons/di";
import { BiCodeBlock } from "react-icons/bi";
import { BiLaptop } from "react-icons/bi";
import { IoIosGitNetwork } from "react-icons/io";

export const Categories: { [key: string]: React.ComponentType } = {
  フロントエンド: BiLaptop,
  バックエンド: BiCodeBlock,
  インフラ: IoIosGitNetwork,
  データサイエンス: DiAtom,
  雑記: AiOutlineEdit,
};

// Category 型は Categories 配列のいずれかの要素のみを許可
export type Category = keyof typeof Categories;
