import type { Post } from "@/types/post";
import { Tags } from "@/types/tags";
import type { Tag } from "@/types/tags";
import TagedArticleLists from "@/app/components/TagedArticleLists";

export async function generateStaticParams() {
  const params = Tags.map((tag) => ({
    slug: tag,
  }));
  return params;
}

const TagsFilteredArticleListPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  // URLデコード
  const decodedSlug = decodeURIComponent(params.slug);
  const tagsArray = decodedSlug.split(",");

  const res = await fetch("http://localhost:3000/api/blog/", {
    cache: "force-cache",
  });
  const blogData = await res.json();

  // slug値(タグ)でblogDataをフィルタリング
  const filteredData = blogData.filter((blog: Post) => {
    const allTagsIncluded = tagsArray.every((tag) =>
      blog.tags.includes(tag as Tag)
    );
    return allTagsIncluded;
  });
  return <TagedArticleLists blogArticle={filteredData} tags={[params.slug]} />;
};

export default TagsFilteredArticleListPage;
