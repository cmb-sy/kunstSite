import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";

import ArticleContent from "@/app/components/ArticleContent";

import "prismjs/components/prism-python.js";
import "prismjs/themes/prism-tomorrow.css";

import { Toc } from "@/app/components/toc";

async function getPrivacyPolicyArticleBySlug(slug: string) {
  const aboutDirectoryPath = path.join(
    process.cwd(),
    "/app/(pages)/privacyPolicy"
  );
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

const getBlogArticle = async (slug: string) => {
  const article = await getPrivacyPolicyArticleBySlug(slug);
  return article;
};

const privacyPolicyPage = async ({ params }: { params: { slug: string } }) => {
  const blogArticle = await getBlogArticle("privacyPolicy.mdx");
  return (
    <ArticleContent
      blogArticle={blogArticle}
      SidebarComponents={[<Toc key="toc" />]}
    />
  );
};

export default privacyPolicyPage;
