import { MDXRemote } from "next-mdx-remote/rsc";
import { ReactNode } from "react";

import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypePrism from "rehype-prism";
import rehypeSlug from "rehype-slug";

import Highlight from "@/app/components/features/MdxEmbedComponent/HighRight";
import Sidebar from "@/app/components/features/SidebarItems/Sidebar";
import CodeBlock from "@/app/components/features/MdxEmbedComponent/CodeBlock";

import ArticleImageGifMovie from "@/app/components/features/MdxEmbedComponent/ArticleImageGifMovie";
import ArticleTopic from "../../elements/tag";

import "./ArticleContent.css";

import "katex/dist/katex.min.css";
import EmbedArticle from "@/app/components/features/MdxEmbedComponent/EmbedArticle";

interface BlogContentProps {
  blogArticle: any;
  SidebarComponents: React.ReactNode[];
}

const codeBlockComponents = {
  code: (props: JSX.IntrinsicAttributes & { children?: ReactNode }) => (
    <CodeBlock {...props} />
  ),
  p: (props: JSX.IntrinsicAttributes & { children?: ReactNode }) => (
    <div {...props} />
  ),
  a: (
    props: JSX.IntrinsicAttributes & { href?: string; children?: ReactNode }
  ) => {
    const { href, children } = props;
    if (href && href.startsWith("http")) {
      return <EmbedArticle url={href} />;
    }
    return <a {...props}>{children}</a>;
  },
};

const BlogContent: React.FC<BlogContentProps> = ({
  blogArticle,
  SidebarComponents,
}) => {
  return (
    <div className="flex justify-center">
      <div className="mt-20 min-h-screen px-10 flex justify-between w-full section-style2">
        <section className="p-10 section-style bg-white">
          <h1 className="text-3xl font-bold text-gray-800">
            {blogArticle.title}
          </h1>
          <br />
          <ArticleTopic
            text={blogArticle.category}
            href={`/category/${blogArticle.category}/1`}
          />
          {blogArticle.tags &&
            blogArticle.tags
              // 空文字対応
              .filter((tag: string) => tag.trim() !== "")
              .map((tag: string, index: number) => (
                <span key={index}>
                  <ArticleTopic text={tag} href={`/tags/${tag}`} />
                </span>
              ))}
          <br />
          <span className="text-gray-400">更新日：{blogArticle.date}</span>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
            integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
            crossOrigin="anonymous"
          />
          {/* 目次表示に必要 */}
          <div className="target-toc">
            <div className="section-style">
              <MDXRemote
                source={blogArticle.content}
                components={{
                  ...codeBlockComponents,
                  Highlight,
                  ArticleImageGifMovie,
                  EmbedArticle,
                  p: (props) => <p {...props} className="custom-p" />, // pタグにカスタムクラスを追加
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
