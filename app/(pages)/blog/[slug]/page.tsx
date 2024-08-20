import { MDXRemote } from "next-mdx-remote/rsc";
import { Toc } from "@/app/components/toc";
import Highlight from "@/app/components/HighRight";
import remarkGfm from "remark-gfm";
import ProfileCard from "@/app/components/ProfileCard";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypePrism from "rehype-prism";
import "prismjs/components/prism-python.js";
import "prismjs/themes/prism-tomorrow.css";

type Post = {
  slug: string;
  title: string;
  date: string;
  blogContentsHTML: string;
};

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
    <div className="container mx-auto py-5 px-2 lg:px-20 flex justify-between w-full">
      <article className="flex flex-col lg:w-2/3 mr-auto">
        <div className="bg-white bg-gray-100 p-5 min-h-screen">
          <h1 className="text-3xl font-bold text-gray-800">
            {blogArticle.title}
          </h1>
          <br />
          <div className="text-gray-600">{blogArticle.date}</div>
          <br />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
            integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
            crossOrigin="anonymous"
          />
          <div className="prose text-gray-700 max-w-4xl target-toc">
            <MDXRemote
              source={blogArticle.content}
              components={{ Highlight }}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm, remarkMath],
                  rehypePlugins: [rehypePrism, rehypeKatex, rehypeSlug],
                },
              }}
            />
          </div>
        </div>
      </article>
      <aside className="hidden lg:block w-full lg:w-custom-298 pr-5 pb-5 pl-5 mt-5 lg:mt-0 lg:ml-1 lg:sticky lg:top-5">
        <ProfileCard />
        <div className="sticky max-h-[80vh] overflow-y-auto">
          <Toc />
        </div>
      </aside>
    </div>
  );
};

export default BlogArticlePage;
