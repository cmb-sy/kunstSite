import { marked } from "marked";
import Link from "next/link";

const stripMarkdownAndHtml = async (markdown: string): Promise<string> => {
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
              await stripMarkdownAndHtml(post.content)
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

// import Link from "next/link";
// import { Post } from "@/types/post";

// const stripHtml = (html: string): string => {
//   const htmlText = html.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
//   return htmlText;
// };

// const getBlogData = async () => {
//   const res = await fetch("http://localhost:3000/api/blog");
//   const blogData = await res.json();
//   return blogData;
// };

// const Home = async () => {
//   const blogData = await getBlogData();
//   return (
//     <div className="container mx-auto py-[50px]">
//       <div className="grid grid-cols-2 gap-6">
//         {blogData.map((blog: Post) => (
//           <Link href={`/blog/${blog.slug}`} className="w-full" key={blog.slug}>
//             <div className="border border-black rounded p-5">
//               <h2 className="text-xl font-bold">{blog.title}</h2>
//               <p className="text-gray-500">{blog.date}</p>
//               <p>{stripHtml(blog.blogContentsHTML).substring(0, 60)}...</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
