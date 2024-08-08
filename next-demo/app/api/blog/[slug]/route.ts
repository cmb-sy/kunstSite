import { NextRequest, NextResponse } from "next/server";
import blogData from "@/blog-data.json";
import path from "path";
import fs from "fs";
const postsDirectoryPath = path.join(process.cwd(), "posts");

const GET = (req: NextRequest, { params }: { params: { slug: string } }) => {
  const { slug } = params;

  const fileNames = fs.readdirSync(postsDirectoryPath);
  const blogArticle = fileNames.find((fileName) => {
    const notMdFileName = fileName.replace(/\.md$/, "");
    return notMdFileName === slug;
  });

  // const blogArticle = blogData.find((blog) => blog.slug === slug);

  if (!blogArticle) {
    return NextResponse.json({}, { status: 404 });
  }

  return NextResponse.json(blogArticle, { status: 200 });
};

export { GET };
