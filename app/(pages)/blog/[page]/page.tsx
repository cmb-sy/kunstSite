import ArticleLists from "@/app/components/features/ArticleContent/ArticleLists";
import { POSTS_PER_PAGE } from "@/app/lib/contants";
import { createPageData, PageData } from "@/app/lib/utils/createPage";
import { getPostsData } from "@/app/lib/utils/getPostsData";

export async function generateStaticParams() {
  let posts;
  try {
    posts = await getPostsData();
  } catch (error) {
    console.error("Failed to fetch blog data:", error);
    posts = [];
  }

  if (!posts || posts.length === 0) {
    return [];
  }

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const pages = Array.from({ length: totalPages }, (_, i) => {
    return {
      page: `${i + 1}`,
    };
  });
  //  e.g.pages=[ { page: '1' }, { page: '2' } ]がディレクトリ[page]に格納され、パスが生成される。
  return pages;
}

const Blog = async ({ params }: { params: { page: number } }) => {
  let allPosts;
  try {
    allPosts = await getPostsData();
  } catch (error) {
    console.error("Failed to fetch blog data:", error);
    allPosts = [];
  }

  const pageData: PageData = createPageData(params.page, allPosts.length);
  const slicedPosts = allPosts.slice(pageData.start, pageData.end);

  return (
    <>
      <div className="flex justify-center">
        <div className="mt-20 mx-6 flex gap-0 lg:gap-6">
          <ArticleLists
            blogData={slicedPosts}
            label={"最新記事"}
            pageData={pageData}
            pageType="blog"
          />
        </div>
      </div>
    </>
  );
};

export default Blog;
