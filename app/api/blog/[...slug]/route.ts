import { NextRequest, NextResponse } from "next/server";
import { getPostBySlug } from "@/app/lib/utils/getPostsData";

const GET = async (
  req: NextRequest,
  { params }: { params: { slug: string[] } }
) => {
  console.log("params.slug", params.slug);
  try {
    // posts内の記事をディレクトリ管理する場合、slugが配列でくるため。
    const slug = params.slug.join("/");
    const blogArticle = await getPostBySlug(slug);

    if (!blogArticle) {
      return new NextResponse(null, { status: 404 });
    }

    return new NextResponse(JSON.stringify(blogArticle), { status: 200 });
  } catch (error) {
    console.error("Failed to fetch blog article(route):", error);
    return new NextResponse(null, { status: 500 });
  }
};

export { GET };
