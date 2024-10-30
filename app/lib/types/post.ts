import { Category } from "@/types/categories";
import type { Tag } from "@/types/tags";

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: Category;
  tags: Tag[];
};
