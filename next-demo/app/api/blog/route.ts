import { NextResponse } from "next/server";
import { getPostMetadata } from "@/utils/getPostsData";

// import blogData from "@/blog-data.json";

const GET = () => {
  const allPostsMetaData = getPostMetadata();
  // console.log("blogData", blogData);
  // console.log("allPostsMetaData", allPostsMetaData);
  return NextResponse.json(allPostsMetaData);
  // return NextResponse.json(blogData);
};

export { GET };
