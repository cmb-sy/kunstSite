import { NextResponse } from "next/server";
import getPostsMetaData from "@/utils/getPostsMetaData";
// import blogData from "@/blog-data.json";

const GET = () => {
  const allPostsMetaData = getPostsMetaData();
  // console.log("blogData", blogData);
  // console.log("allPostsMetaData", allPostsMetaData);
  return NextResponse.json(allPostsMetaData);
  // return NextResponse.json(blogData);
};

export { GET };
