import type { Post } from "@/app/lib/types/post";
import { Tags } from "@/app/lib/types/tags";
import TagedArticleLists from "@/app/components/features/Tags/TagedArticleLists";
import { getPostsData } from "@/app/lib/utils/getPostsData";
import { POSTS_PER_PAGE } from "@/app/lib/contants";
import { createPageData, PageData } from "@/app/lib/utils/createPage";

type TagType = "教師あり学習" | "kaggle" | "数学" | "教師なし学習";

export async function generateStaticParams() {
  const posts = await getPostsData();
  if (!posts || !Array.isArray(posts)) {
    throw new Error("Failed to fetch blog data");
  }

  const params = Object.keys(Tags).flatMap((tag) => {
    const filteredPosts = posts.filter((post: any) => post.tags === tag);
    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    return Array.from({ length: totalPages }, (_, i) => {
      const url = `tags/${tag}/${i + 1}`;
      const slugURL = url.split("/");
      return {
        slug: slugURL,
      };
    });
  });
  return params;
}

const TagsFilteredArticleListPage = async ({
  params,
}: {
  params: { slug: any };
}) => {
  // URLデコード
  const decodedSlug = decodeURIComponent(params.slug);
  const [tag, pageNumber] = decodedSlug.split(",") as [string, string];

  // tag が TagType のいずれかであることをチェック
  if (!["教師あり学習", "kaggle", "数学", "教師なし学習"].includes(tag)) {
    throw new Error("Invalid tag");
  }
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/";
  const res = await fetch(`${apiUrl}/blog/`, {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const blogData = await res.json();
  if (!blogData || !Array.isArray(blogData)) {
    throw new Error("Failed to fetch blog data");
  }

  const filteredData = blogData.filter((blog: Post) =>
    blog.tags.includes(tag as TagType)
  );

  const pageData: PageData = createPageData(
    Number(pageNumber),
    filteredData.length
  );
  const slicedPosts = filteredData.slice(pageData.start, pageData.end);

  return (
    <TagedArticleLists
      blogArticle={slicedPosts}
      tags={tag as TagType}
      pageData={pageData}
      pageType={`tags/${tag}`}
    />
  );
};

export default TagsFilteredArticleListPage;
