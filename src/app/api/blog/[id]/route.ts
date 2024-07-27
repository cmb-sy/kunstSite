import { NextRequest, NextResponse } from "next/server";
import blogData from "@/app/blog-data.json";

const GET = (req: NextRequest, { params }: { params: { id: string } }) => {
  const { id } = params;

  const blogArticle = blogData.find((blog) => blog.id === id);

  if (!blogArticle) {
    return NextResponse.json({}, { status: 404 });
  }

  return NextResponse.json(blogArticle, { status: 200 });
};

export { GET };
