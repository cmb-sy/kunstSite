export const Categories = [
  "フロントエンド",
  "バックエンド",
  "インフラ",
  "AI",
  "その他",
] as const;
export type Category = (typeof Categories)[number];

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: Category;
};
