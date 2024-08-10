import Link from "next/link";
import { Post } from "@/types/post";

const stripHtml = (html: string): string => {
  const htmlText = html.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
  return htmlText;
};

const getBlogData = async () => {
  const res = await fetch("http://localhost:3000/api/blog");
  const blogData = await res.json();
  return blogData;
};

const Home = async () => {
  const blogData = await getBlogData();
  return (
    <div className="container mx-auto py-[50px]">
      <div className="grid grid-cols-2 gap-6">
        {blogData.map((blog: Post) => (
          <Link href={`/blog/${blog.slug}`} className="w-full" key={blog.slug}>
            <div className="border border-black rounded p-5">
              <h2 className="text-xl font-bold">{blog.title}</h2>
              <p className="text-gray-500">{blog.date}</p>
              <p>{stripHtml(blog.blogContentsHTML).substring(0, 60)}...</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
