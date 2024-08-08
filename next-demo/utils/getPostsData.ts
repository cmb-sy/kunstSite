import fs from "fs";
import matter from "gray-matter";
import path from "path";
import html from "remark-html";
import { remark } from "remark";

const postsDirectoryPath = path.join(process.cwd(), "posts");
// console.log("postsDirectoryPath", postsDirectoryPath);

//   mdフォルダを取り出す
export default function getPostMetadata() {
  const fileNames = fs.readdirSync(postsDirectoryPath);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    // マークダウンファイルを文字列として受け取る
    const fullPath = path.join(postsDirectoryPath, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const metaData = matter(fileContents);
    // idとdataを返す。
    return {
      id,
      ...metaData.data,
    };
  });
  return allPostsData;
}

// getStaticPathでreturnで使うパスを取得する。
// https://nextjs.org/docs/pages/api-reference/functions/get-static-paths
export function getAllpostsIds() {
  const fileNames = fs.readdirSync(postsDirectoryPath);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostsData(id: any) {
  // idはファイル名
  const fullPath = path.join(postsDirectoryPath, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContents);
  const blogContents = await remark().use(html).process(matterResult.content);

  const blogContentsHTML = blogContents.toString;
  return {
    id,
    blogContentsHTML,
    ...matterResult.data,
  };
}
