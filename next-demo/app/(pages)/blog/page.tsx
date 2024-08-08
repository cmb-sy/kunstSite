import Link from "next/link";

interface TBlog {
  slug: string;
  title: string;
  content: string;
}

const getBlogData = async () => {
  const res = await fetch("http://localhost:3000/api/blog");
  console.log("ttt", res);

  const blogData = await res.json();

  return blogData;
};

const BlogPage = async () => {
  const blogData = await getBlogData();

  return (
    <div className="container mx-auto py-[50px]">
      <div className="grid grid-cols-12 gap-3">
        {blogData.map((blog: TBlog) => (
          <div
            className="col-span-4 border border-black rounded p-5"
            key={blog.slug}
          >
            <Link href={`/blog/${blog.slug}`} className="w-full">
              <h2>{blog.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
