import { NextRequest, NextResponse } from "next/server";
import { getPostBySlug } from "@/utils/getPostsData";
import blogData from "@/blog-data.json";
import path from "path";
import fs from "fs";
const postsDirectoryPath = path.join(process.cwd(), "posts");

const GET = async (
  req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  const { slug } = params;
  const blogArticle = await getPostBySlug(slug);

  if (!blogArticle) {
    return new NextResponse(null, { status: 404 });
  }

  return new NextResponse(JSON.stringify(blogArticle), { status: 200 });
};

export { GET };
