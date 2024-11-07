import ArticleContent from "@/app/components/features/ArticleContent/ArticleContent";

import { Toc } from "@/app/components/features/SidebarItems/toc";
import { Post } from "@/app/lib/types/post";

// SSG：サーバ起動中でないとエラーが発生する。
export async function generateStaticParams() {
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/";
  try {
    const res = await fetch(`${apiUrl}/blog/`, {
      cache: "force-cache",
    });
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(
        `Failed to fetch data from ${apiUrl}/blog/: ${errorText}`
      );
    }

    const blogData = await res.json();

    const params = blogData.map((blog: Post) => ({
      // blog.slug をスラッシュで分割し、各部分をデコードして配列に変換
      slug: blog.slug.split("/").map(decodeURIComponent),
    }));

    return params;
  } catch (error) {
    console.error(
      "Failed to fetch blog data in app/(pages)/blog/[...slug]/page.tsx:",
      error
    );
    return [];
  }
}

const getBlogArticle = async (slug: string) => {
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/";
  try {
    const res = await fetch(`${apiUrl}/blog/${slug}`, {
      cache: "force-cache",
    });
    if (!res.ok) {
      if (res.status === 404) {
        throw new Error(`Blog article not found for slug: ${slug}`);
      } else {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
    }
    const blogArticle = await res.json();
    return blogArticle;
  } catch (error) {
    console.error("Failed to fetch blog [slug] article:", error);
    return null;
  }
};

const BlogArticlePage = async ({ params }: { params: { slug: string[] } }) => {
  // 配列を / で結合
  const decodedSlug = params.slug.map(decodeURIComponent).join("/");
  const blogArticle = await getBlogArticle(decodedSlug);
  if (!blogArticle) {
    return <div>Failed to load blog article.</div>;
  }

  return (
    <ArticleContent
      blogArticle={blogArticle}
      SidebarComponents={[<Toc key="toc" />]}
    />
  );
};

export default BlogArticlePage;
