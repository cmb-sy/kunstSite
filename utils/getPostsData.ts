import fs, { readFile } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import matter from "gray-matter";

const postsDirectoryPath = path.join(process.cwd(), "posts");

// export async function getPostBySlug(slug: string) {
//   const realSlug = slug.replace(/\.mdx$/, "");
//   const fullPath = path.join(postsDirectoryPath, `${realSlug}.mdx`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");

//   // MDX をコンパイル
//   const { content, frontmatter } = await compileMDX<{ title: string }>({
//     source: fileContents,
//     // components: { Highlight },
//     // options: { parseFrontmatter: true },
//   });
//   console.log(content);
//   return {
//     ...frontmatter,
//     content,
//     slug: realSlug,
//   };
// }

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectoryPath, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  // compileMDXでまとめて可能だが、一覧と記事で分けるため使用しない。
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

// import fs from "fs";
// import matter from "gray-matter";
// import path from "path";
// import html from "remark-html";
// import { remark } from "remark";
// import { Post } from "@/types/post";

// const postsDirectoryPath = path.join(process.cwd(), "posts");

// export async function getPostBySlug(slug: string) {
//   const realSlug = slug.replace(/\.md$/, "");
//   const fullPath = path.join(postsDirectoryPath, `${realSlug}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");
//   const matterResult = matter(fileContents);
//   const blogContents = await remark().use(html).process(matterResult.content);
//   const blogContentsHTML = blogContents.toString();
//   return { ...matterResult.data, slug: realSlug, blogContentsHTML } as Post;
// }

// export async function getAllPosts(): Promise<Post[]> {
//   const slugs = fs.readdirSync(postsDirectoryPath);
//   const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
//   return posts;
// }
