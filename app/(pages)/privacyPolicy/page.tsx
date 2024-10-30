import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";

import ArticleContent from "@/app/components/features/ArticleContent/ArticleContent";

import { Toc } from "@/app/components/features/SidebarItems/toc";

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
