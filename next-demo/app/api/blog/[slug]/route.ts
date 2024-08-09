import { NextRequest, NextResponse } from "next/server";
import { getPostsData } from "@/utils/getPostsData";
import blogData from "@/blog-data.json";
import path from "path";
import fs from "fs";
const postsDirectoryPath = path.join(process.cwd(), "posts");

const GET = async (
  req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  const { slug } = params;
  const blogArticle = await getPostsData(slug);
  // const fileNames = fs.readdirSync(postsDirectoryPath);
  // const blogArticle = fileNames.find((fileName) => {
  //   const notMdFileName = fileName.replace(/\.md$/, "");
  //   return notMdFileName === slug;
  // });

  // console.log("blogArticle", blogArticle);

  // const blogArticle = blogData.find((blog) => blog.slug === slug);

  if (!blogArticle) {
    return new NextResponse(null, { status: 404 });
  }

  return new NextResponse(JSON.stringify(blogArticle), { status: 200 });
};

export { GET };
