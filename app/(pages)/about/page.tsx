import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";

async function getAboutArticleBySlug(slug: string) {
  const fullPath = path.join(`./${slug}.mdx`);
  // console.log("sss", fullPath);
  // const fileContents = await fs.readFile(fullPath, "utf8");
  // const matterResult = matter(fileContents);
  return {
    // ...matterResult.data,
    // content: matterResult.content,
  };
}

// async function generateStaticParams() {
//   const test = "./aboutBlog.mdx";
//   const fileName = test.split("/").pop();
//   const baseName = fileName?.split(".").slice(0, -1).join(".");
//   return {
//     slug: baseName,
//   };
// }

const getBlogArticle = async (slug: string) => {
  console.log("slug", slug);
  const test = await getAboutArticleBySlug(slug);
  return test;
};

const AboutPage = async ({ params }: { params: { slug: string } }) => {
  const fullPath = await getBlogArticle("aboutBlog");
  // console.log("testっっっっっっっっっっっっs", fullPath);
  return <div className="text-[50px]">Coming Soon</div>;
};

export default AboutPage;
