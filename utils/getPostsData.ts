import fs from "fs";
import matter from "gray-matter";
import path from "path";
import html from "remark-html";
import { remark } from "remark";
import { Post } from "@/types/post";

const postsDirectoryPath = path.join(process.cwd(), "posts");

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectoryPath, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const blogContents = await remark().use(html).process(matterResult.content);
  const blogContentsHTML = blogContents.toString();
  return { ...matterResult.data, slug: realSlug, blogContentsHTML } as Post;
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = fs.readdirSync(postsDirectoryPath);
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
  // console.log("posts", posts);
  return posts;
}

// //   mdフォルダを取り出す
// export function getPostMetadata() {
//   const fileNames = fs.readdirSync(postsDirectoryPath);
//   const allPostsData = fileNames.map((fileName) => {
//     const id = fileName.replace(/\.md$/, "");
//     // マークダウンファイルを文字列として受け取る
//     const fullPath = path.join(postsDirectoryPath, fileName);
//     const fileContents = fs.readFileSync(fullPath, "utf-8");
//     const metaData = matter(fileContents);
//     // idとdataを返す。
//     return {
//       id,
//       ...metaData,
//     };
//   });
//   return allPostsData;
// }

// export async function getPostsData(slug: string) {
//   // idはファイル名
//   const fullPath = path.join(postsDirectoryPath, `${slug}.md`);

//   const fileContents = fs.readFileSync(fullPath, "utf-8");
//   const matterResult = matter(fileContents);
//   const blogContents = await remark().use(html).process(matterResult.content);

//   const blogContentsHTML = blogContents.toString();
//   return {
//     slug,
//     blogContentsHTML,
//     ...matterResult.data,
//   };
// }
