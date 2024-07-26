// 本APIルートは、特定のブログ記事をIDで検索し、見つかった場合はその記事を返し、見つからなかった場合は404エラーを返す役割を果たします。

import { NextRequest, NextResponse } from "next/server";
import blogData from "../../../../../blog-data.json";

const GET = (req: NextRequest, { params }: { params: { id: string } }) => {
  const { id } = params;

  //   指定されたIDに一致するブログ記事を検索
  const blogArticle = blogData.find((blog) => blog.id === id);

  if (!blogArticle) {
    return NextResponse.json({}, { status: 404 });
  }

  return NextResponse.json(blogArticle, { status: 200 });
};

export { GET };
