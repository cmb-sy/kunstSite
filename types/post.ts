export const Categories = ["機械学習", "React", "Vue", "AI", "Test"] as const;
export type Category = (typeof Categories)[number];

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: Category;
};
