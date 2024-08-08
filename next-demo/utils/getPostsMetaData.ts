import fs from "fs";
import matter from "gray-matter";
import path from "path";

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
