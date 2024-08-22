import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";
import Highlight from "@/app/components/HighRight";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypePrism from "rehype-prism";
import "prismjs/components/prism-python.js";
import "prismjs/themes/prism-tomorrow.css";
import Sidebar from "@/app/components/Sidevar";

async function getAboutArticleBySlug(slug: string) {
  const aboutDirectoryPath = path.join(process.cwd(), "/app/(pages)/about");
  const cleanSlug = slug.replace(/\.mdx$/, "");
  const articlePath = path.join(aboutDirectoryPath, `${cleanSlug}.mdx`);
  const articleContents = await fs.readFile(articlePath, "utf8");
  const parsedMatter = matter(articleContents);
  return {
    ...parsedMatter.data,
    title: parsedMatter.data.title,
    content: parsedMatter.content,
  };
}

export async function getStaticParams() {
  const aboutDirectoryPath = path.join(process.cwd(), "/app/(pages)/about");
  const aboutFilenames = await fs.readdir(aboutDirectoryPath);
  const slugs = aboutFilenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ""),
  }));

  return slugs;
}

const getBlogArticle = async (slug: string) => {
  const article = await getAboutArticleBySlug(slug);
  return article;
};

const AboutPage = async ({ params }: { params: { slug: string } }) => {
  const blogArticle = await getBlogArticle("aboutBlog.mdx");
  return (
    <div className="flex justify-center">
      <div className="mt-20 min-h-screen pl-9 pr-9 flex justify-between w-full section-style2">
        <section className="p-8 section-style bg-white">
          <h1 className="text-3xl font-bold text-gray-800">
            {blogArticle.title}
          </h1>
          <br />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
            integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
            crossOrigin="anonymous"
          />
          {/* 目次表示に必要 */}
          <div className="target-toc">
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
          </div>
        </section>
        <Sidebar />
      </div>
    </div>
  );
};

export default AboutPage;
