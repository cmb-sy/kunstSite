import BlogGrid from "@/app/components/features/ArticleContent/ArticleLists";
import Pagination from "@/app/components/features/ArticleContent/Pagination";
import { POSTS_PER_PAGE } from "@/app/lib/contants";
import { createPageData, PageData } from "@/app/lib/utils/createPage";
import { getBlogData } from "@/app/lib/utils/getPostsData";

// 静的ルートの作成
export async function generateStaticParams() {
  const posts = await getBlogData();

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const pages = Array.from({ length: totalPages }, (_, i) => {
    return {
      path: `/page/${i + 1}`,
      page: `${i + 1}`,
    };
  });

  return pages;
}

const Blog = async ({ params }: { params: { page: number } }) => {
  const posts = await getBlogData();
  const pageData: PageData = createPageData(params.page, posts.length);
  const slicedPosts = posts.slice(pageData.start, pageData.end);

  return (
    <>
      <div className="flex justify-center">
        <div className="mt-20 min-h-screen pl-9 pr-9 flex justify-between section-style4">
          <BlogGrid
            blogData={slicedPosts}
            label={"最新記事"}
            pageData={pageData}
          />
        </div>
      </div>
    </>
  );
};

export default Blog;
