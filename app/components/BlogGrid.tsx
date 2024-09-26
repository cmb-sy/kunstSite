import Link from "next/link";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import Category from "./Category";
import NotArticle from "@/app/not-article";

import { marked } from "marked";
const stripMarkdown = async (markdown: string): Promise<string> => {
  const html = await marked(markdown);
  const text = html.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
  return text.trim();
};

interface BlogGridProps {
  blogData: any;
  newArticlesLabel: string;
}

const BlogGrid: React.FC<BlogGridProps> = async ({
  blogData,
  newArticlesLabel,
}) => {
  if (blogData.length === 0) {
    console.log(blogData.length);
    return <NotArticle />;
  }

  return (
    <>
      <section className="container mx-auto section-style3">
        <div className="flex justify-center items-center p-4">
          <button className="text-lg font-medium px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            {newArticlesLabel}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {await Promise.all(
            blogData.map(async (post: any, index: number) => {
              const strippedContent = (
                await stripMarkdown(post.content)
              ).substring(0, 70);

              return (
                <div
                  key={index}
                  className="p-6 border rounded shadow-sm bg-white relative"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <h1 className="text-xl font-bold mb-2">{post.title}</h1>
                    <div className="relative"></div>
                    <div className="flex items-center space-x-2 text-gray-500 text-sm mb-2">
                      <span>{post.date}</span>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                        仮タグ
                      </span>
                    </div>
                    <p>{strippedContent}</p>
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </section>
      <div className="mt-20">
        <Sidebar
          SidebarComponents={[
            <SearchBar key="search" />,
            <Category key="category" />,
          ]}
        />
      </div>
    </>
  );
};

export default BlogGrid;
