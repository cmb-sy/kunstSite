import { NextRequest, NextResponse } from "next/server";
import blogData from "@/blog-data.json";

const GET = (req: NextRequest, { params }: { params: { slug: string } }) => {
  const { slug } = params;

  const blogArticle = blogData.find((blog) => blog.id === slug);

  if (!blogArticle) {
    return NextResponse.json({}, { status: 404 });
  }

  return NextResponse.json(blogArticle, { status: 200 });
};

export { GET };
