import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectoryPath = path.join(process.cwd(), "posts");

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectoryPath, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  return {
    ...matterResult.data,
    content: matterResult.content,
    slug: realSlug,
  };
}

/*
 * 指定されたディレクトリ内の全ての .mdx ファイルを再帰的に取得する関数
 */
function getAllMdxFiles(
  dirPath: string,
  arrayOfFiles: string[] = []
): string[] {
  // 指定されたディレクトリ内の全てのファイルとサブディレクトリを取得
  const files = fs.readdirSync(dirPath);

  // 取得したファイルとサブディレクトリを順に処理
  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    // サブディレクトリの場合は再帰的に処理
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllMdxFiles(filePath, arrayOfFiles);
      // .mdx ファイルの場合は配列に追加
    } else if (filePath.endsWith(".mdx")) {
      arrayOfFiles.push(filePath);
    }
  });

  // .mdx ファイルのパスを格納した配列を返す
  return arrayOfFiles;
}

export async function getAllPosts() {
  const mdxFiles = getAllMdxFiles(postsDirectoryPath);
  const posts = await Promise.all(
    mdxFiles.map((filePath) => {
      const slug = path
        .relative(postsDirectoryPath, filePath)
        .replace(/\.mdx$/, "");
      return getPostBySlug(slug);
    })
  );
  return posts;
}
