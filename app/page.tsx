// idじゃないと上手くいかない。
import Link from "next/link";

interface TBlog {
  id: string;
  date: string;
  title: string;
  blogContentsHTML: string;
}

const stripHtml = (html: string): string => {
  const doc = html.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
  return doc;
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
        {blogData.map((blog: TBlog) => (
          <div
            className="col-span-4 border border-black rounded p-5"
            key={blog.id}
          >
            <Link href={`/blog/${blog.id}`} className="w-full">
              <h2>{blog.title}</h2>
            </Link>
            <p>{blog.date}</p>
            {stripHtml(blog.blogContentsHTML).substring(0, 100)}...
            {/* <p>{blog.blogContentsHTML.substring(0, 100)}...</p>{" "} */}
            {/* contentの最初の100文字を表示 */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
