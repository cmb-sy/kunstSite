import { NextResponse } from "next/server";
import { getAllPosts } from "@/app/lib/utils/getPostsData";

const GET = async () => {
  try {
    const getAllPostsData = await getAllPosts();
    return NextResponse.json(getAllPostsData);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.error();
  }
};

export { GET };
