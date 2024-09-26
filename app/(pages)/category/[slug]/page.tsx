import type { Post } from "@/types/post";
import CategorizedPage from "@/app/components/CategorizedPage";

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
  return <CategorizedPage blogArticle={filteredData} />;
};

export default CategorArticleListPage;
