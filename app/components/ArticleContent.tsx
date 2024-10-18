import { MDXRemote } from "next-mdx-remote/rsc";
import { ReactNode } from "react";

import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypePrism from "rehype-prism";
import rehypeSlug from "rehype-slug";

import Highlight from "@/app/components/HighRight";
import Sidebar from "@/app/components/Sidebar";
import CodeBlock from "@/app/components/CodeBlock";

import "@/app/components/ArticleContent.css"; // CSSファイルをインポート
import GithubLinkButton from "./GithubLinkButton";
import ArticleImage from "./ArticleImage";
import ArticleTag from "../../app/components/ui/tag";

interface BlogContentProps {
  blogArticle: any;
  SidebarComponents: React.ReactNode[];
}

const codeBlockComponents = {
  code: (props: JSX.IntrinsicAttributes & { children?: ReactNode }) => (
    <CodeBlock {...props} />
  ),
};

const BlogContent: React.FC<BlogContentProps> = ({
  blogArticle,
  SidebarComponents,
}) => {
  return (
    <div className="flex justify-center">
      <div className="mt-20 min-h-screen pl-9 pr-9 flex justify-between w-full section-style2">
        <section className="p-8 section-style bg-white">
          <h1 className="text-3xl font-bold text-gray-800">
            {blogArticle.title}
          </h1>
          <br />
          <ArticleTag
            text={blogArticle.category}
            href={`/category/${blogArticle.category}`}
          />
          {blogArticle.tags &&
            blogArticle.tags
              // 空文字対応
              .filter((tag: string) => tag.trim() !== "")
              .map((tag: string, index: number) => (
                <span key={index}>
                  <ArticleTag text={tag} href={`/tags/${tag}`} />
                </span>
              ))}
          <br />
          更新日：<span className="text-gray-600">{blogArticle.date}</span>
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
                components={{
                  ...codeBlockComponents,
                  Highlight,
                  GithubLinkButton,
                  ArticleImage,
                }}
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
        <Sidebar SidebarComponents={[SidebarComponents]} />
      </div>
    </div>
  );
};

export default BlogContent;
