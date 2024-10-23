import ArticleContent from "@/app/components/ArticleContent";
import { Toc } from "@/app/components/toc";

type Post = {
  slug: string;
  title: string;
  date: string;
  blogContentsHTML: string;
};

// SSG：サーバ起動中でないとエラーが発生する。
export async function generateStaticParams() {
  try {
    const res = await fetch("http://localhost:3000/api/blog/", {
      cache: "force-cache",
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const blogData = await res.json();

    const params = blogData.map((blog: Post) => ({
      slug: blog.slug.split("/").map(decodeURIComponent),
    }));

    return params;
  } catch (error) {
    console.error("Failed to fetch blog data:", error);
    return [];
  }
}

const getBlogArticle = async (slug: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
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
    console.error("Failed to fetch blog article:", error);
    return null;
  }
};

const BlogArticlePage = async ({ params }: { params: { slug: string[] } }) => {
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
