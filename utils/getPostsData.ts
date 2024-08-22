import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectoryPath = path.join(process.cwd(), "posts");

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectoryPath, `${realSlug}.mdx`);
  console.log("fullPathsssssssss", fullPath);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  return {
    ...matterResult.data,
    content: matterResult.content,
    slug: realSlug,
  };
}

export async function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectoryPath);
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
  return posts;
}
