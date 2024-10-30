export const Categories: { [key: string]: string } = {
  フロントエンド: "/categoryIcon/frontend.svg",
  バックエンド: "/categoryIcon/backend.svg",
  インフラ: "/categoryIcon/infra.svg",
  データサイエンス: "/categoryIcon/ai.svg",
  その他: "/categoryIcon/other.svg",
};

// Category 型は Categories 配列のいずれかの要素のみを許可
export type Category = keyof typeof Categories;
