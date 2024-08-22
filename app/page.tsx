import { marked } from "marked";
import Link from "next/link";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import Category from "./components/Category";

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

const Home = async () => {
  const blogData = await getBlogData();
  return (
    <div className="flex justify-center">
      <div className="mt-20 min-h-screen pl-9 pr-9 flex justify-between section-style4">
        <section className="container mx-auto section-style3">
          <div className="flex justify-center items-center p-4">
            <ul className="flex flex-row space-x-4">
              <li>
                <button className="text-lg font-medium px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                  新着記事
                </button>
              </li>
              <li>
                <button className="text-lg font-medium px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                  人気記事
                </button>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {await Promise.all(
              blogData.map(async (post: any, index: number) => {
                const strippedContent = (
                  await stripMarkdown(post.content)
                ).substring(0, 70);
                return (
                  <div
                    key={index}
                    className="p-6 border rounded shadow-sm relative"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <h1 className="text-xl font-bold mb-2">{post.title}</h1>
                      <div className="relative"></div>
                      <div className="flex items-center space-x-2 text-gray-500 text-sm mb-2">
                        <span>{post.date}</span>
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                          {post.category}
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
      </div>
    </div>
  );
};

export default Home;
