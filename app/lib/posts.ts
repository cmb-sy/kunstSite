// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";

// const postsDirectory = path.join(process.cwd(), "posts");

// // mdファイルを取り出す
// export function getPostData() {
//   const fileNames = fs.readFileSync(postsDirectory);
//   const allPostsData = fileNames.map((fileName) => {
//     const id = fileName.replace(/\.md$/, "");

//     // マークダウンファイルを文字列として読み取る
//     const fullPath = path.join(postsDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, "utf-8");
//     const matterResult = matter(fileContents);
//     return
//     {id,
//         ...matterResult
//     }
//   });

// }
