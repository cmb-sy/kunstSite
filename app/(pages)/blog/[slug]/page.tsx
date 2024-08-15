import { MDXRemote } from "next-mdx-remote/rsc";
import Highlight from "@/app/components/HighRight";
import remarkGfm from "remark-gfm";
import { Post } from "@/types/post";

export const dynamicParams = false;

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

const getBlogArticle = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
    cache: "force-cache",
  });
  const blogArticle = await res.json();
  return blogArticle;
};

const BlogArticlePage = async ({ params }: { params: { slug: string } }) => {
  const blogArticle = await getBlogArticle(params.slug);

  return (
    <div className="container mx-auto py-5 px-2 lg:px-10">
      <article
        className="w-full max-w-3xl bg-white bg-gray-100 p-5 rounded-lg min-h-screen"
        style={{ marginLeft: "4rem" }}
      >
        <h1 className="text-3xl font-bold text-gray-800">
          {blogArticle.title}
        </h1>
        <br />
        <div className="text-gray-600">{blogArticle.date}</div>
        <br />
        <div className="prose prose-lg text-gray-700">
          <MDXRemote
            source={blogArticle.content}
            components={{ Highlight }}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
          />
        </div>
      </article>
    </div>
  );
};

export default BlogArticlePage;
