// ssgにおけるurlのパスに対応するため辞書型に変更
export const Categories = {
  frontend: "フロントエンド",
  backend: "バックエンド",
  infrastructure: "インフラ",
  ai: "AI",
  others: "その他",
} as const;

export type Category = keyof typeof Categories;

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: Category;
};
