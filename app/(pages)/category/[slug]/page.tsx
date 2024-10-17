import { Categories } from "@/types/categories";
import { Category } from "@/types/categories";
import CategorizedArticleLists from "@/app/components/CategorizedArticleLists";
import { Post } from "@/types/post";

// SSG
export async function generateStaticParams() {
  return Categories.map((category) => ({
    slug: category,
  }));
}

const CategorizedArticleListPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const decodedSlug = decodeURIComponent(params.slug);
  const res = await fetch("http://localhost:3000/api/blog/", {
    cache: "force-cache",
  });
  const blogData = await res.json();
  // slug値(カテゴリー)でblogDataをフィルタリング
  const filteredData = blogData.filter(
    (blog: Post) => blog.category === decodedSlug
  );

  // params.slugをCategory型にキャストする前にチェック
  const slugParam = decodedSlug as Category;
  return (
    <CategorizedArticleLists
      blogArticle={filteredData}
      category={slugParam as Category}
    />
  );
};

export default CategorizedArticleListPage;
