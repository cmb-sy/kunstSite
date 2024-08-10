import { NextResponse } from "next/server";
import { getAllPosts } from "@/utils/getPostsData";

const GET = async () => {
  try {
    const getAllPostsData = await getAllPosts();
    // console.log("----------------------------");
    // console.log("getAllPostsData", getAllPostsData);
    return NextResponse.json(getAllPostsData);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.error();
  }
};

export { GET };
