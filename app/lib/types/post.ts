import { Category } from "@/app/lib/types/categories";
import type { Tag } from "@/app/lib/types/tags";

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: Category;
  tags: Tag[];
};
