import path from "path";
import fs from "fs";
import matter from "gray-matter";
const postsDirectory = path.join(process.cwd(), "/posts");

export const getStaticProps = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fileContent = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const matterResult = matter(fileContent);
    console.log(matterResult);
  });
  return {
    props: {
      id,
      ...matterResult,
    },
  };
  allPostsData;
};
