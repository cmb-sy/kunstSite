import { marked } from "marked";
import Link from "next/link";

const stripMarkdown = async (markdown: string): Promise<string> => {
  const html = await marked(markdown);
  const text = html.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
  return text.trim();
};
const getBlogData = async () => {
  const res = await fetch("http://localhost:3000/api/blog");
  const blogData = await res.json();
  return blogData;
};

const BlogPage = async () => {
  const blogData = await getBlogData();
  return (
    <div className="container mx-auto py-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {await Promise.all(
          blogData.map(async (post: any, index: number) => {
            const strippedContent = (
              await stripMarkdown(post.content)
            ).substring(0, 70);
            return (
              <div key={index} className="p-4 border rounded shadow-sm">
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-500 mb-2">{post.date}</p>
                  <p>{strippedContent}</p>
                </Link>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default BlogPage;
