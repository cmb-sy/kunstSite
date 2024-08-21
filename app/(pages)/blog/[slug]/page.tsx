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
    <div className="flex justify-center">
      <div className="mt-20 min-h-screen pl-9 pr-9 flex justify-between w-full section-style2">
        <section className="p-8 section-style bg-white">
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
          <div>
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
        </section>
        <aside className="hidden lg:block">
          <ProfileCard />
          <div>
            <Toc />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogArticlePage;
