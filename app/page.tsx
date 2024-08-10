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
      <div className="grid grid-cols-12 gap-3">
        {blogData.map((blog: Post) => (
          <div
            className="col-span-4 border border-black rounded p-5"
            key={blog.slug}
          >
            <Link href={`/blog/${blog.slug}`} className="w-full">
              <h2>{blog.title}</h2>
            </Link>
            <p>{blog.date}</p>
            <p>{stripHtml(blog.blogContentsHTML).substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
