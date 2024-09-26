import type { Categories, Post } from "@/types/post";
import CategorizedArticleLists from "@/app/components/CategorizedArticleLists";

// SSG
export async function generateStaticParams() {
  const res = await fetch("http://localhost:3000/api/blog/", {
    cache: "force-cache",
  });
  const blogData = await res.json();

  return blogData.map((blog: Post) => ({
    slug: blog.slug,
  }));
}

const CategorArticleListPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const res = await fetch("http://localhost:3000/api/blog");
  const blogData = await res.json();

  // slug値(カテゴリー)でblogDataをフィルタリング
  const filteredData = blogData.filter(
    (blog: Post) => blog.category === params.slug
  );

  // params.slugをkeyof typeof Categoriesにキャスト
  const slugParam = params.slug as keyof typeof Categories;
  return (
    <CategorizedArticleLists blogArticle={filteredData} category={slugParam} />
  );
};

export default CategorArticleListPage;
